import React from "react";
import "./Main.scss";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="whole_page">
        <header className="nav_bar_container">
          <div className="nav_left_side_logo_wrapper">
            <img alt="westagram_logo" src="images/instagram.png" width={25} />
            <img alt="westagram_line" src="images/line.png" width={28} />
            <span className="logo_font logo">
              <Link to="/" className="logo_link logo_font logo">
                Westagram
              </Link>
            </span>
          </div>
          <div className="nav_center_search_wrapper">
            <input className="nav_search" type="text" placeholder="검색" />
            <img
              className="search_img"
              alt="magnifying_glass"
              src="images/search.png"
              width={28}
            />
          </div>
          <div className="nav_right_side_icons_wrapper">
            <img
              alt="navigation_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              width={27}
            />
            <img
              alt="heart_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              width={27}
            />
            <img
              alt="myPage_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              width={27}
            />
          </div>
        </header>
        <div className="main_container">
          <div className="main_left_side_container">
            <div className="article_wrapper">
              <div className="article_top">
                <div className="article_left">
                  <img
                    className="feed_profile_pic"
                    alt="cat_profile_pic"
                    src="https://images.unsplash.com/photo-1598589290625-9b04630ec5d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  />
                  <button className="writer_id">imacutecat</button>
                </div>
                <div className="article_right" />
              </div>
              <img
                className="article_pic"
                alt="cat_fell_asleep_on_the_laptop"
                src="https://images.unsplash.com/photo-1634838080334-28befa9efe80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0JTIwY29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              />
              <div className="article_middle_icon_wrapper">
                <div className="article_icons">
                  <img
                    class="icon_background"
                    alt="like"
                    src="images/heart.png"
                    width={25}
                    height={25}
                  />
                  <img
                    class="icon_background"
                    alt="comments"
                    src="images/chat.png"
                    width={30}
                    height={30}
                  />
                  <img
                    class="icon_background"
                    alt="share"
                    src="images/send.png"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="main_feed_icons_save">
                  <img
                    className="save_icon"
                    alt="save"
                    src="images/save.png"
                    width={23}
                    height={25}
                  />
                </div>
              </div>
              <div className="liked_users_wrapper">
                <img
                  className="liked_user_img"
                  alt="hamster_user"
                  src="https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80>"
                  width={18}
                />
                <span className="liked_user_info">
                  <button>
                    <strong>happy_hamster</strong>
                  </button>
                  님
                  <button>
                    <strong>외 300명</strong>
                  </button>
                  이 좋아합니다
                </span>
              </div>
              <div>
                <div>
                  <button className="article_comments">
                    <strong>imacutecat</strong>
                  </button>
                  <span className="comments_overflow article_comments">
                    오늘도 코딩하다 잠들어버렸😪...
                  </span>
                  <button className="color_grey">더 보기</button>
                </div>
                <div class="article_comments_flex_div">
                  <div>
                    <button className="article_comments">
                      <strong>woof.09</strong>
                    </button>
                    <span className="article_comments_span">그만자 제발🤨</span>
                  </div>
                  <button className="comment_like_btn">
                    <img
                      className="comment_like_mini_btn icon_background"
                      alt="like_button"
                      src="images/heart_no_colour.png"
                    />
                  </button>
                </div>
                <p className="article_comments color_grey">3시간 전</p>
              </div>
              <div className="inputted_new_comment_overflow_js" />
              <form className="post_parent">
                <input
                  className="input_comments"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="post_button">게시</button>
              </form>
            </div>
          </div>
          <div className="main_right_container">
            <div className="side_feed_top">
              <img
                className="userProfilePic"
                alt="surfing_profile_pic"
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              />
              <div className="background_grey">
                <div className="background_grey">
                  <button className="userId_bio">
                    <strong className="background_grey">
                      surfing_bootcamp
                    </strong>
                  </button>
                </div>
                <span className="userId_bio color_grey">
                  Surfing world | 서핑월드
                </span>
              </div>
            </div>
            <div className="story_wrapper">
              <div className="story_top">
                <span className="story_font color_grey">스토리</span>
                <button className="seeAll_right_button">모두보기</button>
              </div>
              <div className="story_overflow">
                <div className="friendsInfo_wrapper">
                  <img
                    className="gotStory_profile_pic feed_profile_pic"
                    alt="friends_profile_pic"
                    src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  />
                  <div className="friendsStoryInfo">
                    <button className="friendsId">
                      <strong>kind.rabbit</strong>
                    </button>
                    <span className="lastUpdated color_grey">1분 전</span>
                  </div>
                </div>
                <div className="friendsInfo_wrapper">
                  <img
                    className="gotStory_profile_pic feed_profile_pic"
                    alt="friends_profile_pic"
                    src="https://images.unsplash.com/photo-1553264701-d138db4fd5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8JTA4YW5ncnklMjBiaXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  />
                  <div className="friendsStoryInfo">
                    <button className="friendsId">
                      <strong>angry_bird</strong>
                    </button>
                    <span className="lastUpdated color_grey">5분 전</span>
                  </div>
                </div>
                <div className="friendsInfo_wrapper">
                  <img
                    className="gotStory_profile_pic feed_profile_pic"
                    alt="friends_profile_pic"
                    src="https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  />
                  <div className="friendsStoryInfo">
                    <button className="friendsId">
                      <strong>mylion</strong>
                    </button>
                    <span className="lastUpdated color_grey">30분 전</span>
                  </div>
                </div>
                <div className="friendsInfo_wrapper">
                  <img
                    className="gotStory_profile_pic feed_profile_pic"
                    alt="friends_profile_pic"
                    src="https://images.unsplash.com/photo-1612639797482-0ca1f21bdeb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwbGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  />
                  <div className="friendsStoryInfo">
                    <button className="friendsId">
                      <strong>swimmmer</strong>
                    </button>
                    <span className="lastUpdated color_grey">1시간 전</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="recommendation_wrapper">
              <div className="recommendation_top">
                <span className="recommendation_font color_grey">
                  회원님을 위한 추천
                </span>
                <button className="seeAll_right_button">모두보기</button>
              </div>
              <div className="recommendation_frame">
                <div className="friendsInfo_wrapper">
                  <img
                    className="feed_profile_pic"
                    alt="friends_profile_pic"
                    src="https://images.unsplash.com/photo-1575699914911-0027c7b95fb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2FuZ2Fyb298ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  />
                  <div className="friendsStoryInfo">
                    <button className="friendsId">
                      <strong>kangaroooo</strong>
                    </button>
                    <span className="lastUpdated color_grey">
                      swimmer님 외 3명이 kangaroooo님과 친구입니다.
                    </span>
                  </div>
                </div>
                <button className="follow_button">팔로우</button>
              </div>
              <div className="recommendation_frame">
                <div className="friendsInfo_wrapper">
                  <img
                    className="feed_profile_pic"
                    alt="friends_profile_pic"
                    src="https://images.unsplash.com/photo-1485735662814-c4f66e49dbae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JTA4Z2lyYWZmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  />
                  <div className="friendsStoryInfo">
                    <button className="friendsId">
                      <strong>giraffeee</strong>
                    </button>
                    <span className="lastUpdated color_grey">
                      angry_bird님 외 1명이 giraffeee님과 친구입니다.
                    </span>
                  </div>
                </div>
                <button className="follow_button">팔로우</button>
              </div>
              <div className="recommendation_frame">
                <div className="friendsInfo_wrapper">
                  <img
                    className="feed_profile_pic"
                    alt="friends_profile_pic"
                    src="https://images.unsplash.com/photo-1499842340257-55ccb7a02645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlwcG98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  />
                  <div className="friendsStoryInfo">
                    <button className="friendsId">
                      <strong>hippoisdabest</strong>
                    </button>
                    <span className="lastUpdated color_grey">
                      mylion님 외 17명이 hippoisdabest님과 친구입니다.
                    </span>
                  </div>
                </div>
                <button className="follow_button">팔로우</button>
              </div>
            </div>
            <div className="copywriter_wrapper">
              <p className="copywriter color_grey">
                Westagram 정보·지원·홍보 센터·API·채용
                정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어
              </p>
              <p className="copywriter color_grey">© 2022 WESTAGRAM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Westagram</title>
//     <link rel="stylesheet" href="main.css" />
//     <link rel="stylesheet" href="common.css" />
//     <link rel="preconnect" href="https://fonts.googleapis.com" />
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//     <link
//       href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
//       rel="stylesheet"
//     />
//     <script defer src="main.js"></script>
//   </head>
//   <body>
//     <header className="nav_bar_container">
//       <div className="nav_left_side_logo_wrapper">
//         <img alt="westagram_logo" src="image/instagram.png" width="25" />
//         <img alt="westagram_line" src="image/line.png" width="28" />
//         <span className="logo_font logo"
//           ><a className="logo_link logo_font logo" href="login.html"
//             >Westagram</a
//           ></span
//         >
//       </div>
//       <div className="nav_center_search_wrapper">
//         <input className="nav_search" type="text" placeholder="검색" />
//         <img
//          className="search_img"
//           alt="magnifying_glass"
//           src="image/search.png"
//           width="28"
//         />
//       </div>
//       <div className="nav_right_side_icons_wrapper">
//         <img
//           alt="navigation_icon"
//           src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
//           width="27"
//         />
//         <img
//           alt="heart_icon"
//           src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
//           width="27"
//         />
//         <img
//           alt="myPage_icon"
//           src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
//           width="27"
//         />
//       </div>
//     </header>
//     <div className="main_container">
//       <div className="main_left_side_container">
//         <div className="article_wrapper">
//           <div className="article_top">
//             <div className="article_left">
//               <img
//                className="feed_profile_pic"
//                 alt="cat_profile_pic"
//                 src="https://images.unsplash.com/photo-1598589290625-9b04630ec5d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
//               />
//               <button className="writer_id">imacutecat</button>
//             </div>
//             <div className="article_right"></div>
//           </div>
//           <img
//            className="article_pic"
//             alt="cat_fell_asleep_on_the_laptop"
//             src="https://images.unsplash.com/photo-1634838080334-28befa9efe80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0JTIwY29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
//           />
//           <div className="article_middle_icon_wrapper">
//             <div className="article_icons">
//               <img alt="like" src="image/heart.png" width="25" height="25" />
//               <img alt="comments" src="image/chat.png" width="30" height="30" />
//               <img alt="share" src="image/send.png" width="25" height="25" />
//             </div>
//             <div className="main_feed_icons_save">
//               <img
//                className="save_icon"
//                 alt="save"
//                 src="image/save.png"
//                 width="23"
//                 height="25"
//               />
//             </div>
//           </div>
//           <div className="liked_users_wrapper">
//             <img
//              className="liked_user_img"
//               alt="hamster_user"
//               src="https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80>"
//               width="18"
//             />
//             <span className="liked_user_info"
//               ><button><strong>happy_hamster</strong></button>님
//               <button><strong>외 300명</strong></button>이 좋아합니다</span
//             >
//           </div>
//           <div>
//             <div>
//               <button className="article_comments">
//                 <strong>imacutecat</strong></button
//               ><span className="comments_overflow article_comments">
//                 오늘도 코딩하다 잠들어버렸😪...
//               </span>
//               <button className="color_grey">더 보기</button>
//             </div>
//             <button className="article_comments"><strong>woof.09</strong></button
//             ><span className="article_comments_span">
//               그만자 제발🤨<button className="comment_like_btn">
//                 <img
//                  className="comment_like_mini_btn"
//                   alt="like_button"
//                   src="image/heart_no_colour.png"
//                 /></button
//             ></span>
//             <p className="article_comments color_grey">3시간 전</p>
//           </div>
//           <div className="inputted_new_comment_overflow_js"></div>
//           <form className="post_parent">
//             <input
//              className="input_comments"
//               type="text"
//               placeholder="댓글 달기..."
//             />
//             <button className="post_button">게시</button>
//           </form>
//         </div>
//       </div>
//       <div className="main_right_container">
//         <div className="side_feed_top">
//           <img
//            className="userProfilePic"
//             alt="surfing_profile_pic"
//             src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
//           />
//           <div className="background_grey">
//             <div className="background_grey">
//               <button className="userId_bio">
//                 <strong className="background_grey">surfing_bootcamp</strong>
//               </button>
//             </div>
//             <span className="userId_bio color_grey">Surfing world | 서핑월드</span>
//           </div>
//         </div>
//         <div className="story_wrapper">
//           <div className="story_top">
//             <span className="story_font color_grey">스토리</span>
//             <button className="seeAll_right_button">모두보기</button>
//           </div>
//           <div className="story_overflow">
//             <div className="friendsInfo_wrapper">
//               <img
//                className="gotStory_profile_pic feed_profile_pic"
//                 alt="friends_profile_pic"
//                 src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
//               />
//               <div className="friendsStoryInfo">
//                 <button className="friendsId"><strong>kind.rabbit</strong></button>
//                 <span className="lastUpdated color_grey">1분 전</span>
//               </div>
//             </div>
//             <div className="friendsInfo_wrapper">
//               <img
//                className="gotStory_profile_pic feed_profile_pic"
//                 alt="friends_profile_pic"
//                 src="https://images.unsplash.com/photo-1553264701-d138db4fd5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8JTA4YW5ncnklMjBiaXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
//               />
//               <div className="friendsStoryInfo">
//                 <button className="friendsId"><strong>angry_bird</strong></button>
//                 <span className="lastUpdated color_grey">5분 전</span>
//               </div>
//             </div>
//             <div className="friendsInfo_wrapper">
//               <img
//                className="gotStory_profile_pic feed_profile_pic"
//                 alt="friends_profile_pic"
//                 src="https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
//               />
//               <div className="friendsStoryInfo">
//                 <button className="friendsId"><strong>mylion</strong></button>
//                 <span className="lastUpdated color_grey">30분 전</span>
//               </div>
//             </div>
//             <div className="friendsInfo_wrapper">
//               <img
//                className="gotStory_profile_pic feed_profile_pic"
//                 alt="friends_profile_pic"
//                 src="https://images.unsplash.com/photo-1612639797482-0ca1f21bdeb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwbGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
//               />
//               <div className="friendsStoryInfo">
//                 <button className="friendsId"><strong>swimmmer</strong></button>
//                 <span className="lastUpdated color_grey">1시간 전</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="recommendation_wrapper">
//           <div className="recommendation_top">
//             <span className="recommendation_font color_grey">
//               회원님을 위한 추천
//             </span>
//             <button className="seeAll_right_button">모두보기</button>
//           </div>

//           <div className="recommendation_frame">
//             <div className="friendsInfo_wrapper">
//               <img
//                className="feed_profile_pic"
//                 alt="friends_profile_pic"
//                 src="https://images.unsplash.com/photo-1575699914911-0027c7b95fb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2FuZ2Fyb298ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
//               />
//               <div className="friendsStoryInfo">
//                 <button className="friendsId">
//                   <strong>kangaroooo</strong>
//                 </button>
//                 <span className="lastUpdated color_grey"
//                   >swimmer님 외 3명이 kangaroooo님과 친구입니다.</span
//                 >
//               </div>
//             </div>
//             <button className="follow_button">팔로우</button>
//           </div>

//           <div className="recommendation_frame">
//             <div className="friendsInfo_wrapper">
//               <img
//                className="feed_profile_pic"
//                 alt="friends_profile_pic"
//                 src="https://images.unsplash.com/photo-1485735662814-c4f66e49dbae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JTA4Z2lyYWZmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
//               />
//               <div className="friendsStoryInfo">
//                 <button className="friendsId">
//                   <strong>giraffeee</strong>
//                 </button>
//                 <span className="lastUpdated color_grey"
//                   >angry_bird님 외 1명이 giraffeee님과 친구입니다.</span
//                 >
//               </div>
//             </div>
//             <button className="follow_button">팔로우</button>
//           </div>

//           <div className="recommendation_frame">
//             <div className="friendsInfo_wrapper">
//               <img
//                className="feed_profile_pic"
//                 alt="friends_profile_pic"
//                 src="https://images.unsplash.com/photo-1499842340257-55ccb7a02645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlwcG98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
//               />
//               <div className="friendsStoryInfo">
//                 <button className="friendsId">
//                   <strong>hippoisdabest</strong>
//                 </button>
//                 <span className="lastUpdated color_grey"
//                   >mylion님 외 17명이 hippoisdabest님과 친구입니다.</span
//                 >
//               </div>
//             </div>
//             <button className="follow_button">팔로우</button>
//           </div>
//         </div>
//         <div className="copywriter_wrapper">
//           <p className="copywriter color_grey">
//             Westagram 정보·지원·홍보 센터·API·채용
//             정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어
//           </p>
//           <p className="copywriter color_grey">© 2022 WESTAGRAM</p>
//         </div>
//       </div>
//     </div>
//   </body>
// </html>
