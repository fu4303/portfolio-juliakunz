import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';
import withLayout from '../layout';

import '../styles/index.scss';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        julia: file(relativePath: { eq: "juliakunz.jpg" }) {
          name
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <div className="hero">
          <div className="wrap">
            <div className="row center-xs start-sm middle-sm">
              <div className="col-xs-12 col-sm-5 img-container">
                <Img fluid={data.julia.childImageSharp.fluid} alt={data.julia.name} />
              </div>
              <div className="col-xs-12 col-sm-6 col-sm-offset-1">
                <h1>
                  <i class="em-svg em-wave" role="img" aria-label="WAVING HAND SIGN"></i>{' '}
                  <FormattedMessage id="home.Hello" />
                </h1>
                <div className="text-large">
                  <FormattedMessage id="home.Welcome" />
                </div>
                <br />
                <div className="hero-link-row">
                  <a href="mailto:julia.kunz.de@gmail.com" className="hero-link ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <FormattedMessage id="home.HeroOne" />
                  </a>
                  <span style={{ opacity: '.75' }}>julia.kunz.de@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section wrap">
            <div className="row">
              <div className="col-xs-12 center-xs col-sm-8 col-sm-offset-2">
                <h2 className="headline" id="services">
                  <FormattedMessage id="home.ServiceHeadline" />
                </h2>
                <p>
                  <FormattedMessage id="home.ServiceSubheadline" />
                </p>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="box">
                  <svg
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    stroke="#A3BFFA"
                    stroke-width="1"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                  </svg>
                  <h4>
                    <FormattedMessage id="home.BA" />
                  </h4>
                  <strong>
                    <FormattedMessage id="home.BAText" />
                  </strong>
                  <FormattedMessage id="home.BATools" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="box">
                  <svg
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    stroke="#A3BFFA"
                    stroke-width="1"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  <h4>
                    <FormattedMessage id="home.PM" />
                  </h4>
                  <strong>
                    <FormattedMessage id="home.PMText" />
                  </strong>
                  <FormattedMessage id="home.PMTools" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="box">
                  <svg
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    stroke="#A3BFFA"
                    stroke-width="1"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <h4>
                    <FormattedMessage id="home.DO" />
                  </h4>
                  <strong>
                    <FormattedMessage id="home.DOText" />
                  </strong>
                  <FormattedMessage id="home.DOTools" />
                </div>
              </div>
            </div>
          </div>

          <div className="section wrap">
            <div className="row listbox--row">
              <div className="col-xs-12 col-sm-4">
                <h2 className="subheadline">
                  <FormattedMessage id="home.Languages" />
                </h2>
                <div className="listbox">
                  <div className="listbox--item">
                    <i class="em-svg em-uk" role="img" aria-label="UK"></i>
                    <div className="bold">
                      <FormattedMessage id="home.English" />
                    </div>
                    <FormattedMessage id="home.Fluent" />
                  </div>
                  <div className="listbox--item">
                    <i class="em-svg em-de" role="img" aria-label="DE"></i>
                    <div className="bold">
                      <FormattedMessage id="home.German" />
                    </div>
                    <FormattedMessage id="home.CurrentlyB2" />
                  </div>
                  <div className="listbox--item">
                    <i class="em-svg em-ru" role="img" aria-label="RU"></i>
                    <div className="bold">
                      <FormattedMessage id="home.Russian" />
                    </div>
                    <FormattedMessage id="home.MotherTongue" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <h2 className="subheadline">
                  <FormattedMessage id="home.Degrees" />
                </h2>
                <div className="listbox">
                  <div className="listbox--item">
                    <i class="em-svg em-school" role="img" aria-label="SCHOOL"></i>
                    <div>
                      <div className="bold">BSc in Economic Cybernetics</div>
                      <div>Belarusian State Economic University</div>
                    </div>
                  </div>
                  <div className="listbox--item">
                    <i class="em-svg em-school" role="img" aria-label="SCHOOL"></i>
                    <div>
                      <div className="bold">Diploma in Project Management</div>
                      <div>Alison</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <h2 className="subheadline">
                  <FormattedMessage id="home.Certificates" />
                </h2>
                <div className="listbox">
                  <div className="listbox--item">
                    <i class="em-svg em-scroll" role="img" aria-label="SCHOOL"></i>
                    <div>
                      <div className="bold bold-certificate">Alison Diploma in Project Management</div>
                    </div>
                  </div>
                  <div className="listbox--item">
                    <i class="em-svg em-scroll" role="img" aria-label="SCHOOL"></i>
                    <div>
                      <div className="bold bold-certificate">Udemy Certificate The Business Analysis Certification Program (IIBA - ECBA)</div>
                    </div>
                  </div>
                  <div className="listbox--item">
                    <i class="em-svg em-scroll" role="img" aria-label="SCHOOL"></i>
                    <div>
                      <div className="bold bold-certificate">Udemy Certificate in MySQL and Security</div>
                    </div>
                  </div>
                  <div className="listbox--item">
                    <i class="em-svg em-scroll" role="img" aria-label="SCHOOL"></i>
                    <div>
                      <div className="bold bold-certificate">Certificate TELC Deutsch B2 + Beruf</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section wrap">
            <div className="row">
              <div className="col-xs-12 center-xs col-sm-8 col-sm-offset-2">
                <h2 className="headline">
                  <FormattedMessage id="home.CVHeadline" />
                </h2>
                <p>
                  <FormattedMessage id="home.CVSubheadline" />
                </p>
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2 center-xs">
                <div className="bubble">
                  <div>Jan 2018</div>
                  <div className="center">
                    2 <FormattedMessage id="home.Years" />
                  </div>
                  <div>Jan 2020</div>
                </div>
              </div>
              <article className="exp-item col-xs-12 col-sm-8 ">
                <h3>Freshcells GmbH, D??sseldorf, Germany</h3>
                <div>Project Manager / Consultant, January 2018 - January 2020</div>

                <p>
                  <strong>
                    <FormattedMessage id="home.MainTasks" />
                  </strong>
                  <ul>
                    <li>
                      <FormattedMessage id="home.freshcells.one" />
                    </li>
                    <li>
                      <FormattedMessage id="home.freshcells.two" />
                    </li>
                    <li>
                      <FormattedMessage id="home.freshcells.three" />
                    </li>
                    <li>
                      <FormattedMessage id="home.freshcells.four" />
                    </li>
                    <li>
                      <FormattedMessage id="home.freshcells.five" />
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.KeyChallenges" />
                  </strong>
                  <ul>
                    <li>
                      <FormattedMessage id="home.freshcells.six" />
                    </li>
                    <li>
                      <FormattedMessage id="home.freshcells.seven" />
                    </li>
                    <li>
                      <FormattedMessage id="home.freshcells.eight" />
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.References" />
                  </strong>
                  <nav>
                    <a target="_blank" rel="noreferrer" href="https://www.etravel.cz/">
                      https://www.etravel.cz/
                    </a>{' '}
                    -{' '}
                    <a target="_blank" rel="noreferrer" href="https://www.aldiana.com/">
                      https://www.aldiana.com/
                    </a>
                  </nav>
                </p>
              </article>
            </div>

            <div className="row">
              <div className="col-sm-2 center-xs">
                <div className="bubble">
                  <div>Jul 2017</div>
                  <div className="center">
                    4 <FormattedMessage id="home.Months" />
                  </div>
                  <div>Nov 2017</div>
                </div>
              </div>
              <article className="exp-item col-xs-12 col-sm-8 ">
                <h3>OXAGILE, Minsk, Belarus</h3>
                <div>Product Manager / Business Analyst July 2017 - November 2017</div>

                <p>
                  <strong>
                    <FormattedMessage id="home.MainTasks" />
                  </strong>
                  <ul>
                    <li>
                      <FormattedMessage id="home.oxagile.one" />
                    </li>
                    <li>
                      <FormattedMessage id="home.oxagile.two" />
                    </li>
                    <li>
                      <FormattedMessage id="home.oxagile.three" />
                    </li>
                    <li>
                      <FormattedMessage id="home.oxagile.four" />
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.KeyChallenges" />
                  </strong>
                  <ul>
                    <li>
                      <FormattedMessage id="home.oxagile.five" />
                    </li>
                    <li>
                      <FormattedMessage id="home.oxagile.six" />
                    </li>
                    <li>
                      <FormattedMessage id="home.oxagile.seven" />
                    </li>
                    <li>
                      <FormattedMessage id="home.oxagile.eight" />
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.References" />
                  </strong>
                  <nav>
                    <a target="_blank" rel="noreferrer" href="https://www.proctoru.com/">
                      https://www.proctoru.com
                    </a>
                  </nav>
                </p>
              </article>
            </div>

            <div className="row">
              <div className="col-sm-2 center-xs">
                <div className="bubble">
                  <div>May 2015</div>
                  <div className="center">
                    1 <FormattedMessage id="home.Year" />
                  </div>
                  <div>Apr 2016</div>
                </div>
              </div>
              <article className="exp-item col-xs-12 col-sm-8 ">
                <h3>OCS Innovation Company (OCSICO??), Minsk, Belarus</h3>
                <div>Business Analyst / Product Manager May 2015 - April 2016</div>

                <p>
                  <strong>
                    <FormattedMessage id="home.MainTasks" />
                  </strong>
                  <ul>
                    <li>
                      <FormattedMessage id="home.ocs.one" />
                    </li>
                    <li>
                      <FormattedMessage id="home.ocs.two" />
                    </li>
                    <li>
                      <FormattedMessage id="home.ocs.three" />
                    </li>
                    <li>
                      <FormattedMessage id="home.ocs.four" />
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.KeyChallenges" />
                  </strong>
                  <ul>
                    <li>
                      <FormattedMessage id="home.ocs.five" />
                    </li>
                    <li>
                      <FormattedMessage id="home.ocs.six" />
                    </li>
                    <li>
                      <FormattedMessage id="home.ocs.seven" />
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.References" />
                  </strong>
                  <nav>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.trc-solutions.com/assisted-selling-platform/"
                    >
                      https://www.trc-solutions.com/assisted-selling-platform/
                    </a>
                  </nav>
                </p>
              </article>
            </div>

            <div className="row">
              <div className="col-sm-2 center-xs">
                <div className="bubble last">
                  <div>Jun 2012</div>
                  <div className="center">
                    3 <FormattedMessage id="home.Years" />
                  </div>
                  <div>Feb 2015</div>
                </div>
              </div>
              <article className="exp-item col-xs-12 col-sm-8 ">
                <h3>SoftConveyer, Minsk, Belarus</h3>
                <div>Business Analyst / Product Manager June 2012 - February 2015</div>

                <p>
                  <strong>
                    <FormattedMessage id="home.MainTasks" />
                  </strong>
                  <ul>
                    <li>
                      <FormattedMessage id="home.softconveyer.one" />
                    </li>
                    <li>
                      <FormattedMessage id="home.softconveyer.two" />
                    </li>
                    <li>
                      <FormattedMessage id="home.softconveyer.four" />
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.KeyChallenges" />
                  </strong>
                  <ul>
                    <li>
                      <FormattedMessage id="home.softconveyer.five" />
                    </li>
                    <li>
                      <FormattedMessage id="home.softconveyer.six" />
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.References" />
                  </strong>
                  <nav>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.trc-solutions.com/assisted-selling-platform/"
                    >
                      https://www.trc-solutions.com/assisted-selling-platform/
                    </a>
                  </nav>
                </p>
              </article>
            </div>
          </div>
        </div>
      </>
    )}
  />
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
