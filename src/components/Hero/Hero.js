import style from './Hero.module.css';

const Hero = () => {
  return (
    <div className={style.container}>
      <section className={style.hero}>
        <div className={style.hero__left}>
          <h2 className={style.hero__title}>Superman</h2>
          <h3 className={style.hero__gendre}>Gendre: Thriler, Drama, Romance, heroik</h3>
          <p className={style.hero__deskription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi nostrum enim ipsum rem expedita error dignissimos repudiandae ut placeat?</p>
          <button className={style.hero__button}>Watch</button>
        </div>
        <div className={style.hero__right}>
          <img className={style.hero__img} src="https://source.unsplash.com/600x400?superman" alt="" />
        </div>
      </section>
    </div>
  );
};
export default Hero;
