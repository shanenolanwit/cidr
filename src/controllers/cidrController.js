const controller = {};

controller.list = (req, res) => {
  
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM cidr', (err, cidrs) => {
     if (err) {
      res.json(err);
     }
     if(cidrs.length === 0){
      req.flash('message', "Not enough CIDR");
     }
     else if(cidrs.length% 10 === 0){
      req.flash('message', "Go at it again. Not enough CIDR");
     } else {
      req.flash('message', "Not enough CIDR, have " + (10 - cidrs.length% 10) + " more anyway");
     }
     
     res.render('cidrs', {
        data: cidrs,
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

module.exports = controller;
