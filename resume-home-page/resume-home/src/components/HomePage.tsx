import React from 'react';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  const handlePresentationClick = () => {
    // You can add the navigation logic here
    window.location.href = 'http://10.0.124.71:3000/';  // Update this with your actual presentation URL
  };

  return (
    <div className="resume-layout">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="profile-section">
          <div className="profile-image">
            <img src="public\resume-data\증명사진.jpg" alt="Profile" />
          </div>
          <h1 className="name">민병수</h1>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <span className="icon">📱</span>
            <span>+82-10-2287-5783</span>
          </div>
          <div className="info-item">
            <span className="icon">📧</span>
            <span>qud9783@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <span>Seoul, Korea</span>
          </div>
        </div>

        <div className="section-divider"></div>

        <div className="skills-section">
          <h2>취미 활동</h2>
          <div className="skill-item">
            <span className="skill-icon">🏋️‍♂️</span>
            <span>웨이트 트레이닝</span>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🎮</span>
            <span>비디오 게임</span>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🏂</span>
            <span>스키 타기</span>
          </div>
        </div>

        <div className="section-divider"></div>

        <div className="languages-section">
          <h2>자격증 및 면허</h2>
          <div className="language-item">
            <span>자동차운전면허보통1종</span>
            <span className="proficiency">2019.07.31</span>
          </div>
          <div className="language-item">
            <span>SQLD (SQL 개발자)</span>
            <span className="proficiency">2025.04.04</span>
          </div>
          <div className="language-item">
            <span>정보처리기사</span>
            <span className="proficiency">2025.06.03(예정)</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="intro-section">
          <h2 className="intro-title" style={{textAlign: 'left'}}>About Me</h2>
          <div className="intro-content">
            <p className="intro-text">
              컴퓨터공학을 전공하고, 미국 연구실 인턴, 현장실습, 아카데미를 비롯한 다양한 사이드 프로젝트에서 실무 경험을 쌓았습니다.
            </p>
            <p className="intro-text">
              iOS, Data Engineering, AI, CV, SQL과 관련된 기술 스택과 경험을 가지고 있습니다.
            </p>
            <p className="intro-text">
              Figma, Sketch, Apple Symbols를 활용한 UI/UX 설계 및 프로토타이핑 역량을 갖고 있습니다.
            </p>
          </div>
          <div className="about-me-button-wrapper">
            <button 
              className="about-me-button"
              onClick={handlePresentationClick}
            >
              <span>Presentation</span>
              <span className="button-icon">→</span>
            </button>
          </div>
        </div>

        <div className="section-divider"></div>

        <div className="experience-section">
          <h2 style={{textAlign: 'left'}}>업무 경험</h2>
          
          <div className="experience-item">
            <div className="company-logo">
              <img src="https://images.squarespace-cdn.com/content/v1/623126b50d2dfb281caaafd3/1672873159780-DMNEXJD6Q07IVOXSC4QM/Purdue-University-logo.png" alt="Company Logo" />
            </div>
            <div className="experience-details">
              <h3>Purdue University</h3>
              <p className="position">CNIT 연구실 인턴</p>
              <p className="date">2023.09 - 2023.12</p>
              <p className="description">
                미국 인디애나 주 Purdue University의 CNIT 연구실에서 인턴으로 참여하였습니다.{'\n'}
                사용자의 생체정보를 수집해 집중력을 계산하는 ML 모델을 개발하였습니다.{'\n\n'}
                실시간으로 사용자의 집중력을 측정하고 이를 통해 사용자의 집중력을 제공해주는 모바일 애플리케이션을 개발하였습니다.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="company-logo">
              <img src="https://devjun.net/wp-content/uploads/2024/04/code-5113374_1280-1024x682.jpg" alt="Company Logo" />
            </div>
            <div className="experience-details">
              <h3>민트 기술</h3>
              <p className="position">iOS 인턴</p>
              <p className="date">2023.06 - 2023.08</p>
              <p className="description">
                서울시 강남구 민트 기술에서 iOS 인턴으로 참여하였습니다.{'\n'}
                SI 업무를 맡아 모바일 애플리케이션을 기획하고 개발하였습니다.{'\n\n'}
                사용자가 집에서 손쉽게 피부 관리 루틴을 지킬 수 있게 하는 어플리케이션을 개발했습니다.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <div className="company-logo">
              <img src="https://static.wixstatic.com/media/4d892d_ea2824ce2f9b424fa742f0ddf8ca5f81~mv2.png/v1/fit/w_2500,h_1330,al_c/4d892d_ea2824ce2f9b424fa742f0ddf8ca5f81~mv2.png" alt="Company Logo" />
            </div>
            <div className="experience-details">
              <h3>Apple Developer Academy @ POSTECH</h3>
              <p className="position">iOS 아카데미 수료</p>
              <p className="date">2022.03 - 2022.12</p>
              <p className="description">
                포항에 위치한 포항 공과 대학교에서 애플 개발자 아카데미를 진행하였습니다.{'\n'}
                Apple의 개발 철학, 디자인 가이드라인, Apple 생태계에서 구동하는 애플리케이션을 제작하는 방법을 학습했습니다.{'\n\n'}
                App Store에 총 3개의 어플리케이션을 출품했으며, WWF(세계자연기금)와의 협력을 거친 프로젝트 진행 경험이 있습니다.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <div className="company-logo">
              <img src="https://i.namu.wiki/i/5ADu5fExfNKci-OOnKR4g06itHhIYlTOtOka4r17vT1dOE_3L_3l4RupEIwpGFrRTkTIMYvnSZA15VnOUJMTFQ.svg" alt="Company Logo" />
            </div>
            <div className="experience-details">
              <h3>빅데이터 기반의 지능 정보 시스템 개발 과정</h3>
              <p className="position">ML, DL, SQL, 빅데이터 분석</p>
              <p className="date">2021.06 - 2021.09</p>
              <p className="description">
                한국데이터산업진흥원에서 빅데이터 기반의 지능 정보 시스템 개발 과정을 진행하였습니다.{'\n'}
                SQL, Python, Pytorch, Keras, Tensorflow 등 다양한 기술을 학습했습니다.{'\n\n'}
                한국 연예인들의 얼굴을 수집하는 자동화 과정과 이를 통해 모델을 학습시키고 유튜브의 영상에서 연예인들을 자동으로
                인식하는 모델을 Chrome Extension에 적용하는 프로젝트를 진행했습니다.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <div className="company-logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamRbWQ91Dwe8c3ud6SVAUXgLy542E6n2AtA&s" alt="Company Logo" />
            </div>
            <div className="experience-details">
              <h3>Silicon Valley Technology & Innovation Program</h3>
              <p className="position">San Jose State Unviersity</p>
              <p className="date">2020.06 - 2020.08</p>
              <p className="description">
                미국 캘리포니아 주에 위치한 San Jose State University에서 실리콘 밸리 현직자들의 강의를 듣고 프로젝트를 진행했습니다.{'\n'}
                Python, Pytorch, Keras, Tensorflow, CV 등 다양한 기술을 학습했습니다.{'\n\n'}
                온라인 화상 통화 플랫폼에서 사용자들의 집중도와 부정행위 발생 여부를 탐색하는 확장 프로그램을 개발했습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 