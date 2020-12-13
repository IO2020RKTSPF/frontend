import Login from "./../components/Login";
import Header from "./../components/Header/Header";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="container">
        <Header
          title="Dołącz do nas i dzielmy się wspólnie książkami"
          subtitle="Każdy czytający książki wie, że zdobycie interesującej go pozycji nie
          zawsze jest proste."
        />
        <Login />
        <p className="login-terms">
          Kontynuując zgadzasz się na naszą Politykę Prywatności i Regulamin
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
