import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks.ts';
import Logo from './Logo.tsx';
import UserBlock from './UserBlock.tsx';

export default function PromoFilm() {
  const films = useAppSelector((state) => state.films);
  const promo = useAppSelector((state) => state.promoFilm);
  if (!promo) {
    return;
  }
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promo?.backgroundImage} alt={promo?.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={promo?.posterImage}
              alt={promo?.name}
              width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promo?.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promo?.genre}</span>
              <span className="film-card__year">{promo?.released}</span>
            </p>

            <div className="film-card__buttons">
              <Link
                to={`player/${promo?.id}`}
                className="btn btn--play film-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">{films?.length}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
