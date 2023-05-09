import Form from "@/components/home/Form"
import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import BestMember from "@/components/teamPage/BestMember"
import s from '@/styles/main/TeamSlider.module.css'
import c from '@/styles/main/TeamCard.module.css'
import Link from "next/link"

export async function getStaticProps() {
  
    const teamQuery = `query MyQuery {
      posts {
        name
        excerpt
        profession
        slug
        tags
        category
        coverImage {
          url
        }
        awards {
          html
        }
        rewards
      }
    }`;
  
    const teamResponse = await fetch(
      'https://api-us-west-2.hygraph.com/v2/clh4zdcwq5s5p01ue7mgtbapo/master',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ query: teamQuery }),
      }
    );
  
    const teamData = await teamResponse.json();
    const teamMembers = teamData.data.posts;
  
    return {
      props: {
        teamMembers,
      },
    };
  }
  
  const truncateText = (text, maxLength = 7) => {
    const words = text.split(' ');
    return words.length > maxLength
      ? words.slice(0, maxLength).join(' ') + '...'
      : text;
  };

const TeamPage = ({ teamMembers }) => {
    return (
      <main>
        <Header />
        <div>
          <BestMember />
  
          <section className={`${s.team_section}`}>
            <h1 className={`container ${s.h1}`}>Development</h1>
            <div className={`${s.team_slider} ${s.container}`}>
              {teamMembers &&
                teamMembers
                  .filter((teamMember) => teamMember.category.includes("development"))
                  .map((teamMember, index) => (
                    <div key={index} className={c.card}>
                      <div className={c.card_header}>
                        <div className={s.photo}>
                          <img src={teamMember.coverImage?.url} alt="" />
                        </div>
                        <div className={c.about}>
                          <h4>{teamMember.name}</h4>
                          <h5>{teamMember.profession}</h5>
                          <p>{truncateText(teamMember.excerpt)}</p>
                          <Link href={`/cv/${teamMember.slug}`}>more details</Link>
                        </div>
                      </div>
                      <div className={c.awards_block}>
                        <h3>Awards</h3>
                        <div className={c.rewards_block}>
                          <div className={c.rew}>
                              {teamMember.rewards && teamMember.rewards.reward && teamMember.rewards.reward.length > 0 ? (teamMember.rewards.reward.map((reward, index) => (
                                  <div key={index} className={c.rewards}>
                                      <span>{reward.number}</span>
                                      <p>{reward.text}</p>
                                  </div>
                                  
                              ))
                              ) : (
                              <p className={c.comming}>They are not there yet, but they will definitely be soon! 💪</p>
                              )}
                          </div>
                        </div>
                      </div>
                      <div className={c.tags}>
                        {teamMember.tags &&
                          teamMember.tags.tagss.map((tag, index) => (
                            <button className={c.tag} key={index}>
                              {tag}
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
            </div>
          </section>

          <section className={`${s.team_section}`}>
            <h1 className={`container ${s.h1}`}>UX/UI</h1>
            <div className={`${s.team_slider} ${s.container}`}>
              {teamMembers &&
                teamMembers
                  .filter((teamMember) => teamMember.category.includes("design"))
                  .map((teamMember, index) => (
                    <div key={index} className={c.card}>
                      <div className={c.card_header}>
                        <div className={s.photo}>
                          <img src={teamMember.coverImage?.url} alt="" />
                        </div>
                        <div className={c.about}>
                          <h4>{teamMember.name}</h4>
                          <h5>{teamMember.profession}</h5>
                          <p>{truncateText(teamMember.excerpt)}</p>
                          <Link href={`/cv/${teamMember.slug}`}>more details</Link>
                        </div>
                      </div>
                      <div className={c.awards_block}>
                        <h3>Awards</h3>
                        <div className={c.rewards_block}>
                        <div className={c.rew}>
                            {teamMember.rewards && teamMember.rewards.reward && teamMember.rewards.reward.length > 0 ? (teamMember.rewards.reward.map((reward, index) => (
                                <div key={index} className={c.rewards}>
                                    <span>{reward.number}</span>
                                    <p>{reward.text}</p>
                                </div>
                                
                            ))
                            ) : (
                            <p className={c.comming}>They are not there yet, but they will definitely be soon! 💪</p>
                            )}
                        </div>
                    </div>
                      </div>
                      <div className={c.tags}>
                        {teamMember.tags &&
                          teamMember.tags.tagss.map((tag, index) => (
                            <button className={c.tag} key={index}>
                              {tag}
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
            </div>
          </section>

          <section className={`${s.team_section}`}>
            <h1 className={`container ${s.h1}`}>Marketing</h1>
            <div className={`${s.team_slider} ${s.container}`}>
              {teamMembers &&
                teamMembers
                  .filter((teamMember) => teamMember.category.includes("marketing"))
                  .map((teamMember, index) => (
                    <div key={index} className={c.card}>
                      <div className={c.card_header}>
                        <div className={s.photo}>
                          <img src={teamMember.coverImage?.url} alt="" />
                        </div>
                        <div className={c.about}>
                          <h4>{teamMember.name}</h4>
                          <h5>{teamMember.profession}</h5>
                          <p>{truncateText(teamMember.excerpt)}</p>
                          <Link href={`/cv/${teamMember.slug}`}>more details</Link>
                        </div>
                      </div>
                      <div className={c.awards_block}>
                        <h3>Awards</h3>
                        <div className={c.rewards_block}>
                        <div className={c.rew}>
                            {teamMember.rewards && teamMember.rewards.reward && teamMember.rewards.reward.length > 0 ? (teamMember.rewards.reward.map((reward, index) => (
                                <div key={index} className={c.rewards}>
                                    <span>{reward.number}</span>
                                    <p>{reward.text}</p>
                                </div>
                                
                            ))
                            ) : (
                            <p className={c.comming}>They are not there yet, but they will definitely be soon! 💪</p>
                            )}
                        </div>
                    </div>
                      </div>
                      <div className={c.tags}>
                        {teamMember.tags &&
                          teamMember.tags.tagss.map((tag, index) => (
                            <button className={c.tag} key={index}>
                              {tag}
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
            </div>
          </section>
  
          <Form />
        </div>
        <Footer />
      </main>
    );
  };

  export default TeamPage