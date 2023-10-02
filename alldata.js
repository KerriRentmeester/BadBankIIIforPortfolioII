function AllData(){
  //console.log(name, email, password, deposit, withdraw, balance);
  const ctx = React.useContext(UserContext);
  //console.log(ctx);
  return (
    <div className="alldata">
    <Card
      bgcolor="info"
      txtcolor="white"
      header="All Data"
      body= {(
        <>
        {ctx.map(function(data) {
          return (
            <li>{data}</li>
          )
        })}
        </>
      )}
    />
    </div>
  );
}