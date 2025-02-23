import { Link } from "@/components/link";
import { paths } from "@/config/paths";

const NotFoundPage = () => {
  return (
    <div className="mt-52 flex flex-col items-center">
      <h1>404 - Page Not Found &#128578;</h1>
      <Link href={paths.home.getHref()} replace>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
