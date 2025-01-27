import s from '@/styles/cases/Members.module.css';

const Members = ({ cases }) => {
  return (
    <section className="container">
      <h3 className={s.h3}>Members</h3>
      <div className={s.members}>
        <div className={s.member}>
          <img src="./assets/images/stanislav.svg" alt="" />
          <div>
            <h5>Name Name</h5>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        <div className={s.member}>
          <img src="./assets/images/stanislav.svg" alt="" />
          <div>
            <h5>Name Name</h5>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        <div className={s.member}>
          <img src="./assets/images/stanislav.svg" alt="" />
          <div>
            <h5>Name Name</h5>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        <div className={s.member}>
          <img src="./assets/images/stanislav.svg" alt="" />
          <div>
            <h5>Name Name</h5>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        <div className={s.member}>
          <img src="./assets/images/stanislav.svg" alt="" />
          <div>
            <h5>Name Name</h5>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        <div className={s.member}>
          <img src="./assets/images/stanislav.svg" alt="" />
          <div>
            <h5>Name Name</h5>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
      </div>
      <div className={s.reviews_block}>
        <div>
          <h4 className={s.h4}>Reviews</h4>
          <div className={s.reviews_header}>
            <img src={cases.reviewsImg?.url} alt="" />
            <button>
              Watch video <img src="./assets/icons/play-btn.svg" alt="" />
            </button>
            <button>
              Listen voice <img src="./assets/icons/voice.svg" alt="" />
            </button>
          </div>
          <div className={s.review}>
            <h4>{cases.reviewsName}</h4>
            <p>{cases.reviewsText}</p>
          </div>
        </div>
        <img className={s.img} src="./assets/images/6047.svg" alt="" />
      </div>
    </section>
  );
};

export default Members;
