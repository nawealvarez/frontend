import { Link } from 'react-router-dom';
import Button from '#/components/button';
import Navbar from '#/components/navbar';

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center">
      <div className="md:w-1/2 w-5/6 flex flex-col m-auto gap-24">
        <div className="flex flex-col items-center gap-6">
          <h3 className="font-semibold text-8xl">404</h3>
          <img
            className="md:w-32"
            src="/assets/images/sad-face.svg"
            alt="not-found-page"
          />
          <p className="text-2xl">Lo sentimos, página no encontrada</p>
        </div>
        <Link to="/home">
          <Button
            type="button"
            className="bg-violet-brand p-3 text-white w-full rounded-xl text-xl tracking-wider shadow-md hover:border-violet-light"
            label="Ir al Inicio"
          />
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
