import Login from "./../components/Login";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="container">
        <h1>Dołącz do nas i dzielmy się wspólnie książkami</h1>
        <p>
          Każdy czytający książki wie, że zdobycie interesującej go pozycji nie
          zawsze jest proste.{" "}
        </p>
        <Login />
        <p className="login-terms">
          Kontynuując zgadzasz się na naszą Politykę Prywatności i Regulamin
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
