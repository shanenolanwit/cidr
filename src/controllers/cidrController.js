const controller = {};

var macaddress = require('macaddress');

controller.list = (req, res) => {
 
  var servermac = ""
  macaddress.one(function (err, mac) {
    servermac = mac
    console.log("Mac address for this host: %s", mac);  
  });
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM cidr', (err, cidrs) => {
     if (err) {
      res.json(err);
     }
     if(cidrs.length === 0){
      //req.flash('message', "Not enough CIDR");
     }
     else if(cidrs.length% 10 === 0){
      req.flash('message', "Go at it again");
     } else {
      req.flash('message', "Have " + (10 - cidrs.length% 10) + " more anyway");
     }
     
     res.render('cidrs', {
        data: cidrs,
        servermac: servermac,
        message: req.flash('message')
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO cidr set ?', data, (err, cidr) => {
      console.log(cidr)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM cidr WHERE id = ?", [id], (err, rows) => {
      res.render('cidrs_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newcidr = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE cidr set ? where id = ?', [newcidr, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM cidr WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

controller.ping = (req, res) => {

  macaddress.one(function (err, mac) {
    res.json({id: req.params.id, date: new Date(), url: req.originalUrl, path: req.path, sentby: req.ip, receivedby: mac})
  });
  
}

module.exports = controller;
