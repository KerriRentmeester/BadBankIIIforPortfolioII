function Home(){
  return (
    <div className="home">
    <Card
      txtcolor="black"
      header="Bad Bank Home Page"
      title="WELCOME TO THE BANK"
      text="For all your banking needs.  (Not really since there is no security in this bank!)"
      body= {(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
    </div>
  );
}