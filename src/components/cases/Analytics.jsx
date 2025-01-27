import s from '@/styles/cases/Analytics.module.css';
import { useState } from 'react';

const Analytics = ({ cases }) => {
  const data = [{ content: cases.also1 }, { content: cases.also2 }];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="container">
      <div className={s.block_01}>
        <p>01</p>
        <h3>Analytics</h3>
      </div>
      <div className={s.text_01}>
        {cases.analytics01 && <p>{cases.analytics01}</p>}
        {cases.analytics02 && <p>{cases.analytics02}</p>}
      </div>
      {cases.analyticsResult && (
        <p className={s.dashed_p}>{cases.analyticsResult}</p>
      )}
      <div className={s.rect}>
        <div className={s.blur}>
          <img src="./assets/img/rect2.svg" alt="" />
          <div></div>
        </div>
        <div className={s.rect_text}>
          <p>
            Building an application architecture using the flowchart method
            based on user experience analysis
          </p>
          <img src="./assets/images/6041.svg" alt="" />
          <div className={s.glow1} />
        </div>
      </div>
      {(cases.also1 || cases.also2) && (
        <div className={s.also}>
          <h4>Also</h4>
          <div className={s.accordions}>
            {data.map((item, index) => {
              const isActive = index === activeIndex;
              const arrowIcon = isActive
                ? './assets/icons/arr-minus.svg'
                : './assets/icons/arr-plus.svg';

              return (
                <div
                  className={isActive ? s.active_accordion : s.accordion}
                  key={index}
                >
                  <div className={s.accordion_header}>
                    <p className={isActive ? s.active_text : s.text}>
                      {item.content}
                    </p>
                    <button
                      onClick={() => setActiveIndex(isActive ? null : index)}
                    >
                      <img src={arrowIcon} alt="" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <p className={s.dashed_p2}>{cases.alsoResult}</p>
        </div>
      )}
    </section>
  );
};

export default Analytics;
