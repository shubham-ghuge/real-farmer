import errorImg from "../../assets/error-404.svg";
import PrimaryHeader from "../Header/PrimaryHeader";
function Error() {
  return (
    <>
      <PrimaryHeader />
      <div className="flex-column container h-90 jc-center ai-center">
        <img src={errorImg} className="h-40" alt="Error icon" />
        <h2 className="heading mt-4">Error 404! Page Not Found</h2>
      </div>
    </>
  );
}
export { Error };
