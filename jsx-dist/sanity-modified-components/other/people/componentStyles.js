import styled from 'styled-components';
export const OurTeamSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  /* padding: 20px; */

  position: relative;
  z-index: 0;

  padding-top: 80px;

  @media(min-width: 768px) {
    &::before {
      top: 20px;
      width: 30%;
    }
  }

  .title-search-category-container {
    position: relative;
    z-index: 3;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 120px;
    left: 0;
    width: 40%;
    height: 60%;
    background-image: -webkit-linear-gradient(40deg, #6b3170 0%, #ff0a00 100%);
    background-image: -moz- oldlinear-gradient(40deg, #6b3170 0%, #ff0a00 100%);
    background-image: -o-linear-gradient(40deg, #6b3170 0%, #ff0a00 100%);
    background-image: linear-gradient(50deg, #6b3170 0%, #ff0a00 100%);
  }

  &::after {
    background-color: #242525;
    content: "";
    height: 225px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  & h1 {
    /* margin-bottom: 15px;
    color: #f4f4f4;

    text-align: center; */

    margin-top: 50px;
    /* margin-bottom: 15px; */
    color: #f4f4f4;
    text-align: center;
    height: 100px;

  }
`;
export const Body = styled.div`
  
  #primary {
    paddding-bottom: 40px;
    padding-top: 40px;
  }

  .no-sidebar .content-area {
    width: 100%;
  }

  @media screen and (min-width: 940px) {
    .content-area {
      float: left;
    }
  }

  article {
    display: block;
  }

  .container {
    padding-right: .9375rem;
    padding-left: .9375rem;
    margin-right: auto;
    margin-left: auto;

    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-size: 0.875rem;
    line-height: 1.7;
    color: #777777;

    margin: auto;
    max-width: 1200px;
    padding: 0 20px;
    position: relative;
    z-index: 2;

    display: block !important;
    overflow: hidden !important;
  }

  @media (min-width: 544px) {
    .container {
      /* max-width: 576px; */

      font-size: 15px;
    }
  }

  .entry-content {
    margin-bottom: 30px;
  }

  .tmm .tmm_wrap {
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
  }

  .tmm .tmm_container {
    /* display: inline; */
    /* This has to change immediately
    (switch from display: inline only to
    the two styles below)
    you switch to dynamic generation rather 
    than static generation */
    display: block !important;
    overflow: hidden; 
  }

  .tmm .tmm_2_columns .tmm_member {
    width: 42%;
    margin-right: 4%;
    margin-left: 4%;
    margin-top: 120px;
    margin-bottom: 25px;

    padding-top: 20px;
  }

  .tmm .tmm_member {
    vertical-align: top;
    display: inline-block;
    margin-top: 25px;
    margin-bottom: 25px;
    height: auto;
    float: left;
    position: relative;
    text-align: center;
    -webkit-box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.04);
    -moz-box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.04);
    box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.04);
    border-top: 5px solid lightgrey;
    border-left: solid 1px #eee;
    border-right: solid 1px #eee;
    border-bottom: 5px solid whitesmoke;
    background: white;
    box-sizing: border-box;

    border-top: 5px solid #fa3200;
  }

  @media only screen and (max-width: 40em) {
    .tmm .tmm_member, .tmm .tmm_1_columns .tmm_member, .tmm .tmm_2_columns .tmm_member, .tmm .tmm_3_columns .tmm_member, .tmm .tmm_4_columns .tmm_member, .tmm .tmm_5_columns .tmm_member {
      width: 96%;
      margin: 0 2%;
      margin-top: 110px;
      margin-bottom: 25px;
    }
  }

  /* @media only screen and (max-width: 40em) {
    .tmm .tmm_member,                                    .tmm .tmm_2_columns .tmm_member, .tmm .tmm_3_columns .tmm_member, .tmm .tmm_4_columns .tmm_member, .tmm .tmm_5_columns .tmm_member {
      width: 40%;
      margin-left: 5%;
      margin-right: 5%;
      margin-top: 80px;
      margin-bottom: 25px;
    }
  } */

  @media only screen and (max-width: 64.063em) {
    .tmm .tmm_member, .tmm .tmm_2_columns .tmm_member, .tmm .tmm_3_columns .tmm_member, .tmm .tmm_4_columns .tmm_member, .tmm .tmm_5_columns .tmm_member {
      width: 40%;
      margin-left: 5%;
      margin-right: 5%;
      margin-top: 80px;
      margin-bottom: 25px;
    }
  }

  .tmm_2_columns .tmm_member .tmm_photo {
    width: 50%;
    padding-bottom: 50%;
    margin-top: -25%;
  }

  .tmm .tmm_member .tmm_photo {
    margin-left: auto;
    margin-right: auto;
    background-size: cover !important;
    background-position: center center !important;
    width: 60%;
    padding-bottom: 60%;
    border: none;
    -webkit-box-shadow: 2px 0px 1px 0px rgba(0,0,0,0.05);
    -moz-box-shadow: 2px 0px 1px 0px rgba(0,0,0,0.05);
    box-shadow: 2px 0px 1px 0px rgba(0,0,0,0.05);
    border-radius: 60px !important;
    margin-top: -30%;
    border: 6px solid #eeeeee;

    background-size: cover;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 40em) {
    .tmm .tmm_member .tmm_photo, .tmm .tmm_1_columns .tmm_member .tmm_photo, .tmm .tmm_2_columns .tmm_member .tmm_photo, .tmm .tmm_3_columns .tmm_member .tmm_photo, .tmm .tmm_4_columns .tmm_member .tmm_photo, .tmm .tmm_5_columns .tmm_member .tmm_photo {
      width: 45%;
      padding-bottom: 45%;
      margin-top: -24%;
    }
  }

  @media only screen and (max-width: 64.063em) {
    .tmm .tmm_member .tmm_photo, .tmm .tmm_2_columns .tmm_member .tmm_photo, .tmm .tmm_3_columns .tmm_member .tmm_photo, .tmm .tmm_4_columns .tmm_member .tmm_photo, .tmm .tmm_5_columns .tmm_member .tmm_photo {
      width: 50%;
      padding-bottom: 50%;
      margin-top: -25%;
    }
  }

  .tmm .tmm_member .tmm_textblock {
    padding: 10px 12px;
  }

  .tmm .tmm_plugin_f .tmm_names {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 8px;
    margin-top: 10px;
  }

  .tmm .tmm_names span, .tmm .tmm_names span.tmm_fname, .tmm .tmm_names span.tmm_lname, .tmm .tmm_names {
    color: #222222;
  }

  .tmm .tmm_plugin_f .tmm_job {
    font-size: 16px;
    font-weight: 400;
  }

  .tmm .tmm_job, .tmm .tmm_job p {
    color: #888888;
  }

  @media only screen and (max-width: 40em) {
    .tmm .tmm_plugin_f .tmm_desc {
      padding: 0 10px;
      font-size: 16px;
      line-height: 27px;
    }
  }

  .tmm .tmm_plugin_f .tmm_desc {
    padding: 0px;
    margin-top: 19px;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
  }

  .tmm .tmm_desc, .tmm .tmm_desc span, .tmm .tmm_desc p {
    color: #555555;
    word-break: break-word;
  }

  @media only screen and (max-width: 40em) {
    .tmm .tmm_plugin_f .tmm_desc {
      padding: 0 10px;
      font-size: 16px;
      line-height: 27px;
    }
  }

  .tmm .tmm_member .tmm_textblock .tmm_scblock {
    padding_top: 10px;
  }

  .tmm .tmm_columns_containers_desktop {
    display: block;
    clear: both;
  }

  @media only screen and (max-width: 64.063em) {
    .tmm .tmm_columns_containers_desktop {
      display: none;
      clear: none;
    }
  }

  @media only screen and (max-width: 64.063em) {
    .tmm_two_containers_tablet {
      display: block;
      clear: both;
    }
  }

  .tmm .tmm_container::last-child {
    display: block;
    text-align: center !important;

    margin-top: 25px;
  }

  .tmm .tmm_container::last-child .tmm_member {
    float: none !important;
  }  
`;