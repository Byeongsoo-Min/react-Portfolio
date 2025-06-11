"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Database,
  Brain,
  Cloud,
} from "lucide-react"
import Image from "next/image"

const sections = ["introduction", "roadmap", "projects", "iOS-Projects", "AI-projects", "tech-stack"]

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0)

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length)
  }

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length)
  }

  const goToSection = (index: number) => {
    setCurrentSection(index)
  }

  const handleBackHome = () => {
    window.location.href = 'http://10.0.124.71:5173/';  // Update this with your actual presentation URL
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center" onClick={handleBackHome}>
              <span className="text-white font-bold text-sm">MBS</span>
            </div>
            <span className="font-semibold">Portfolio</span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {sections.map((section, index) => (
              <Button
                key={section}
                variant={currentSection === index ? "default" : "ghost"}
                size="sm"
                onClick={() => goToSection(index)}
                className={section === "iOS-Projects" || section === "AI-projects" ? "" : "capitalize"}
              >
                {section.replace("-", " ")}
              </Button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Introduction Section */}
        {currentSection === 0 && (
          <section className="min-h-screen flex items-center justify-center p-4">
            <div className="container max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      01 INTRODUCE
                    </Badge>
                    <h1 className="text-4xl lg:text-6xl font-bold text-slate-900">
                      Computer Science
                      <span className="text-green-500"> Engineer</span>
                    </h1>
                  </div>

                  <div className="space-y-4 text-lg text-slate-600">
                    <p>
                      컴퓨터공학을 전공했으며, 미국 대학 연구실 인턴, 현장실습, 아카데미를 비롯한 다양한 사이드
                      프로젝트에서 실무 경험을 쌓았습니다.
                    </p>
                    <p>
                      <strong>iOS, DATA ENGINEERING, AI, CV, SQL</strong>과 관련된 기술 스택과 경험을 가지고 있습니다.
                    </p>
                    {/* <p>
                      <strong>FIGMA, SKETCH, APPLE SYMBOLS</strong>를 활용한 UI/UX 설계 및 프로토타이핑 역량을 갖고
                      있습니다.
                    </p> */}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary">iOS Development</Badge>
                    <Badge variant="secondary">Data Engineering</Badge>
                    <Badge variant="secondary">AI/ML</Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                    <Badge variant="secondary">UI/UX Design</Badge>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center p-1">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/증명사진.jpg"
                          alt="Profile"
                          width={280}
                          height={280}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                      <Code className="w-8 h-8 text-green-500" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Roadmap Section */}
        {currentSection === 1 && (
          <section className="min-h-screen flex items-center justify-center p-4">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="text-green-600 border-green-600 mb-4">
                  02 ROADMAP
                </Badge>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">경희대학교 컴퓨터공학과 학사 2019 ~ 2025</h2>
              </div>

              <div className="relative">
                {/* Timeline bar with gradient */}
                <div className="absolute top-8 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"></div>
                
                {/* Timeline sections */}
                <div className="relative grid grid-cols-3 gap-4">
                  {/* ML, CV, AI Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-blue-500 relative z-10 ring-4 ring-blue-100"></div>
                      <div className="absolute top-8 w-1 h-8 bg-blue-500"></div>
                    </div>
                    <div className="text-center pt-10">
                      <p className="font-medium text-blue-500">ML, CV, AI, Data Engineer</p>
                      <p className="text-sm text-gray-600">(2020 - Present)</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 shadow-md border border-blue-100">
                      <h3 className="font-bold mb-2 text-blue-900">Silicon Valley Technoly & Innovation</h3>
                      <h3 className="font-bold mb-2 text-blue-900">빅데이터기반지능정보시스템개발과정</h3>
                    </div>
                  </div>

                  {/* iOS Developer Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-purple-500 relative z-10 ring-4 ring-purple-100"></div>
                      <div className="absolute top-8 w-1 h-8 bg-purple-500"></div>
                    </div>
                    <div className="text-center pt-10">
                      <p className="font-medium text-purple-500">iOS Developer</p>
                      <p className="text-sm text-gray-600">(2022 - Present)</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-4 shadow-md border border-purple-100">
                      <h3 className="font-bold mb-2 text-purple-900">Apple Developer Academy @ POSTECH</h3>
                      <h3 className="font-bold mb-2 text-purple-900">현장실습 인턴십 (민트기술)</h3>
                    </div>
                  </div>

                  {/* Internship Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-green-500 relative z-10 ring-4 ring-green-100"></div>
                      <div className="absolute top-8 w-1 h-8 bg-green-500"></div>
                    </div>
                    <div className="text-center pt-10">
                      <p className="font-medium text-green-500">융합형 인재</p>
                      <p className="text-sm text-gray-600">(2023 - Present)</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-4 shadow-md border border-green-100">
                      <h3 className="font-bold mb-2 text-green-900">Purdue University CNIT Lab Internship</h3>
                      <h3 className="font-bold mb-2 text-green-900">경희대학교 컴퓨터공학 졸업 프로젝트</h3>
                    </div>
                  </div>
                </div>

                {/* Achievement Section */}
                <div className="mt-24 grid grid-cols-3 gap-8">
                  {/* Technical Skills */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="font-bold mb-4">기술 스택</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Swift- UIKit, SwiftUI, RXSwift</li>
                      <li>• Python- Django, OpenCV, Pytorch, Keras</li>
                      <li>• Java- Spring</li>
                    </ul>
                  </div>

                  {/* Social Activities */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="font-bold mb-4">기타 사회 경험</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 단과대학 학생회 3년</li>
                      <li>• World Vision 봉사활동</li>
                      <li>• 대학생 멘토링 봉사활동</li>
                    </ul>
                  </div>

                  {/* Certifications */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="font-bold mb-4">자격증 및 면허</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 운전면허보통1종</li>
                      <li>• SQLD (SQL-개발자)</li>
                      <li>• 정보처리기사</li>
                      <li>• OPIc - English IH</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Overview Section */}
        {currentSection === 2 && (
          <section className="min-h-screen flex items-center justify-center p-4">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="text-green-600 border-green-600 mb-4">
                  03 PROJECTS
                </Badge>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">프로젝트 분포 및 방향</h2>
                <p className="text-xl text-slate-600">다양한 기술 스택을 활용한 프로젝트 경험</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Categories */}
                <div className="grid grid-cols-2 gap-6">
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">iOS Developer</h3>
                    <p className="text-sm text-slate-600 mb-3">iOS 생태계에서 구동하는 어플리케이션 제작</p>
                    <div className="flex justify-center mb-3">
                      <Badge variant="secondary">7개의 프로젝트</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="text-xs">Swift</Badge>
                      <Badge variant="outline" className="text-xs">SwiftUI</Badge>
                      <Badge variant="outline" className="text-xs">UIKit</Badge>
                    </div>
                  </Card>

                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Data Engineer</h3>
                    <p className="text-sm text-slate-600 mb-3">클라우드 스택과 데이터베이스등의 스택</p>
                    <div className="flex justify-center mb-3">
                      <Badge variant="secondary">다른 프로젝트와 연관</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="text-xs">AWS</Badge>
                      <Badge variant="outline" className="text-xs">NCP</Badge>
                      <Badge variant="outline" className="text-xs">SQL</Badge>
                    </div>
                  </Card>

                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Computer Vision</h3>
                    <p className="text-sm text-slate-600 mb-3">OpenCV, NCP, Deep Learning</p>
                    <div className="flex justify-center mb-3">
                      <Badge variant="secondary">2개의 프로젝트</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="text-xs">OpenCV</Badge>
                      <Badge variant="outline" className="text-xs">Deep Learning</Badge>
                    </div>
                  </Card>

                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">AI Engineer</h3>
                    <p className="text-sm text-slate-600 mb-3">AI(LLM, Object Detection 등)를 활용한 프로젝트</p>
                    <div className="flex justify-center mb-3">
                      <Badge variant="secondary">3개의 프로젝트</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="text-xs">Machine Learning</Badge>
                      <Badge variant="outline" className="text-xs">NLP</Badge>
                    </div>
                  </Card>
                </div>

                {/* Radar Chart Placeholder */}
                <div className="flex justify-center">
                  <Card className="p-8 w-full max-w-md">
                    <h3 className="text-center font-semibold text-lg mb-6">프로젝트 분포도</h3>
                    <div className="relative w-64 h-64 mx-auto">
                      {/* Base circles */}
                      <div className="absolute inset-0 border-2 border-slate-200 rounded-full"></div>
                      <div className="absolute inset-4 border border-slate-200 rounded-full"></div>
                      <div className="absolute inset-8 border border-slate-200 rounded-full"></div>
                      <div className="absolute inset-12 border border-slate-200 rounded-full"></div>

                      {/* Connecting lines */}
                      <svg className="absolute inset-0 w-full h-full">
                        <path 
                          d="M 128,8 L 232,128 L 128,248 L 24,128 Z" 
                          fill="rgba(99, 102, 241, 0.1)"
                          stroke="rgba(99, 102, 241, 0.3)"
                          strokeWidth="1.5"
                        />
                      </svg>

                      {/* Data points with larger size and glow effect */}
                      <div className="absolute top-0.2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg ring-2 ring-blue-300"></div>
                      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full shadow-lg ring-2 ring-green-300"></div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg ring-2 ring-purple-300"></div>
                      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg ring-2 ring-orange-300"></div>

                      {/* Labels */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium">iOS</div>
                      <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-xs font-medium">Data Eng</div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium">CV</div>
                      <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 text-xs font-medium">AI</div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* iOS Projects Section */}
        {currentSection === 3 && (
          <section className="min-h-screen flex items-center justify-center p-4">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="text-blue-600 border-blue-600 mb-4">
                  iOS PROJECTS
                </Badge>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">iOS Development Portfolio</h2>
              </div>

              <Tabs defaultValue="thome" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="thome">THOME</TabsTrigger>
                  <TabsTrigger value="relay">RELAY</TabsTrigger>
                  <TabsTrigger value="trol">TROL</TabsTrigger>
                </TabsList>

                <TabsContent value="thome" className="mt-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">THOME</h3>
                        <p className="text-lg text-slate-600 mb-6">
                          현장실습에 참여하며 진행했던 주요한 프로젝트입니다. aTHOME이라는 화장품 업체의 홈케어루틴을
                          진행하는 애플리케이션이었습니다.
                        </p>
                        <p className="text-slate-600 mb-6">
                          이 과정에서 타이머 로직, 전면 카메라를 사용하며 프로그램 안내 UI 플로팅 등의 로직을 맡아
                          구현했습니다.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">주요 기능</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li>• 카메라를 활용한 인터랙션</li>
                          <li>• 다양한 포인트 시스템</li>
                          <li>• 타이머 로직 구현</li>
                          <li>• UI 플로팅 시스템</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">기술 스택</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge>UIKit</Badge>
                          <Badge>SwiftUI</Badge>
                          <Badge>RxSwift</Badge>
                          <Badge>Core Data</Badge>
                          <Badge>Supabase</Badge>
                          <Badge>Fastlane</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="flex space-x-4">
                          <div className="w-[500px] h-[380px] bg-gradient-to-b from-slate-100 to-slate-200 rounded-3xl border-8 border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
                            <Image
                              src="/THOME-mock.jpg"
                              alt="THOME App Screen 1"
                              width={500}
                              height={600}
                              className="rounded-2xl object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="relay" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Relay</h3>
                        <p className="text-lg text-slate-600 mb-6">
                          사람들의 소통을 위한 소셜 네트워크 애플리케이션입니다. 사람들은 음악에서 쉽게 영감을 받는다는 생각에서 발전시킨 어플리케이션입니다.
                        </p>
                        <p className="text-slate-600 mb-6">
                          이 과정에서 음악 송출을 위한 멀티쓰레딩, 로컬 데이터 저장을 위한 Realm, 백엔드 구성을 위한 Django를 학습, 사용했습니다.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">주요 기능</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li>• 음악 송출 기능</li>
                          <li>• 소셜 네트워크 기능</li>
                          <li>• 로컬 데이터 저장 기능</li>
                          <li>• 백엔드 구성 기능</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">기술 스택</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge>UIKit</Badge>
                          <Badge>SwiftUI</Badge>
                          <Badge>RxSwift</Badge>
                          <Badge>Realm</Badge>
                          <Badge>Django</Badge>
                          <Badge>AWS</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="flex space-x-4">
                          <div className="w-[300px] h-[630px] bg-gradient-to-b from-slate-100 to-slate-200 rounded-3xl border-8 border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
                            <Image
                              src="/로그인.png"
                              alt="THOME App Screen 1"
                              width={500}
                              height={600}
                              className="rounded-2xl object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="trol" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">TROL</h3>
                        <p className="text-lg text-slate-600 mb-6">
                          일상에서는 서로에게 책임을 정당히 나누는 것이 힘들다는 것에서 착안해 발전시킨 애플리케이션입니다. 간단한 게임을 통해서 서로의 책임을 
                          분담할 수 있는 어플리케이션을 제작했습니다.
                        </p>
                        <p className="text-slate-600 mb-6">
                          이 과정에서 iOS의 물리엔진, 중력 가속도 센서, 다양한 인터랙션, CoreData를 활용했습니다.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">주요 기능</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li>• 중력 가속도 센서 활용</li>
                          <li>• 다양한 인터랙션</li>
                          <li>• 로컬 데이터 저장</li>
                          <li>• 물리엔진 활용</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">기술 스택</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge>UIKit</Badge>
                          <Badge>SwiftUI</Badge>
                          <Badge>RxSwift</Badge>
                          <Badge>CoreData</Badge>
                          <Badge>Physics Engine</Badge>
                          <Badge>SpriteKit</Badge>
                        </div>
                      </div>
                    </div>

                    
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}

        {/* AI Projects Section */}
        {currentSection === 4 && (
          <section className="min-h-screen flex items-center justify-center p-4">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="text-purple-600 border-purple-600 mb-4">
                  AI PROJECTS
                </Badge>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">AI & Machine Learning Portfolio</h2>
              </div>

              <Tabs defaultValue="manager" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="manager">MANAGER</TabsTrigger>
                  <TabsTrigger value="purdue">Purdue University</TabsTrigger>
                </TabsList>

                <TabsContent value="manager" className="mt-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">MANAGER</h3>
                        <p className="text-lg text-slate-600 mb-6">
                          경희대학교 컴퓨터공학과 학사 졸업 프로젝트로 진행한 개인 프로젝트입니다.
                        </p>
                        <p className="text-slate-600 mb-6">OCR, LLM을 활용해 만든 사용자화 명함 관리 서비스입니다.</p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">주요 기능</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li>• OCR을 활용한 명함 텍스트 추출</li>
                          <li>• LLM 기반 명함 정보 분석</li>
                          <li>• 개인화된 명함 관리 시스템</li>
                          <li>• 실시간으로 원하는 정보를 탐색 가능</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">기술 스택</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Naver Cloud Platform</Badge>
                          <Badge>OpenCV</Badge>
                          <Badge>Tesseract</Badge>
                          <Badge>ChatGPT-4 API</Badge>
                          <Badge>Java Spring</Badge>
                          <Badge>PostgreSQL</Badge>
                          <Badge>SwiftUI</Badge>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">담당 역할</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">클라우드</Badge>
                          <Badge variant="outline">백엔드</Badge>
                          <Badge variant="outline">DB</Badge>
                          <Badge variant="outline">모바일</Badge>
                          <Badge variant="outline">프롬프트 엔지니어링</Badge>
                          <Badge variant="outline">Computer Vision</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="flex space-x-4">
                          <div className="w-[300px] h-[630px] bg-gradient-to-b from-purple-50 to-purple-100 rounded-3xl border-8 border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
                            <Image
                              src="/manager.png"
                              alt="Manager App Screen"
                              width={300}
                              height={600}
                              className="rounded-2xl object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="purdue" className="mt-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Purdue University CNIT Lab</h3>
                        <p className="text-lg text-slate-600 mb-6">
                          Purdue University의 CNIT Lab에서 진행한 연구 인턴십입니다.
                        </p>
                        <p className="text-slate-600 mb-6">
                          사용자의 생체정보를 수집, 분석, 실시간 제공 서비스를 제작하고, IEEE 형식의 영어 논문으로 이를 정리했습니다.
                          Extra Tree Regressor, Random Forest, XGBoost 모델을 앙상블하여 모델을 제작하였고, 이를 통해 정확도를 높일 수 있었습니다.

                          이 과정에서 AWS, Django, React-Native, ML, DL을 활용할 수 있었습니다.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">주요 연구</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li>• 생체정보 수집</li>
                          <li>• 생체정보 분석</li>
                          <li>• 실시간 제공 서비스</li>
                          <li>• 논문 작성</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">기술 스택</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Python</Badge>
                          <Badge>Extra Tree Regressor</Badge>
                          <Badge>Random Forest</Badge>
                          <Badge>XGBoost</Badge>
                          <Badge>Pandas</Badge>
                          <Badge>NumPy</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                    <div className="relative">
                        <div className="flex space-x-4">
                          <div className="w-[300px] h-[280px] bg-gradient-to-b from-purple-50 to-purple-100 rounded-3xl border-8 border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
                            <Image
                              src="/purdue 3.png"
                              alt="Purdue Research"
                              width={500}
                              height={380}
                              className="rounded-2xl object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="flex space-x-4">
                          <div className="w-[300px] h-[580px] bg-gradient-to-b from-purple-50 to-purple-100 rounded-3xl border-8 border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
                            <Image
                              src="/purdue 2.png"
                              alt="Purdue Research"
                              width={500}
                              height={380}
                              className="rounded-2xl object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}

        {/* Tech Stack Section */}
        {currentSection === 5 && (
          <section className="min-h-screen flex items-center justify-center p-4">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="text-green-600 border-green-600 mb-4">
                  TECH STACK
                </Badge>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">주요 사용 기술 스택</h2>
                <p className="text-xl text-slate-600">다양한 프로젝트에서 활용한 기술들</p>
              </div>

              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 flex items-center">
                      <Smartphone className="w-5 h-5 mr-2 text-blue-500" />
                      Mobile Development
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">UIKit, Xib (XML Interface Builder)</h4>
                        <p className="text-sm text-slate-600">
                          UIKit과 Xib를 활용해 어플리케이션의 기본 골조와 UI/UX를 설계 및 개발했습니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">SwiftUI, RxSwift</h4>
                        <p className="text-sm text-slate-600">
                          SwiftUI를 활용해 UI/UX를 설계 및 개발했으며, RxSwift를 활용해 어플리케이션 내에서의 State와
                          반응형 로직을 관리 및 개발했습니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">React-Native</h4>
                        <p className="text-sm text-slate-600">
                          React-Native를 활용해 크로스 플랫폼이 지원되는 모바일 앱을 개발했습니다.
                        </p>
                      </div>
                      
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-green-500" />
                      Database & Backend
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Django, PostgreSQL</h4>
                        <p className="text-sm text-slate-600">
                          Django를 활용해 백엔드 서버를 구축하고, PostgreSQL을 활용해 데이터베이스를 관리했습니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Supabase</h4>
                        <p className="text-sm text-slate-600">
                          PostgreSQL기반의 데이터베이스와 클라우드 백엔드 서비스를 제공하는 Supabase를 활용해 RESTful한
                          API 설계와 데이터베이스 관리를 진행했습니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Java Spring, MySQL</h4>
                        <p className="text-sm text-slate-600">
                          Java Spring을 활용해 백엔드 서버를 구축하고, MySQL을 활용해 데이터베이스를 관리했습니다. 이를 통해 데이터베이스 관리와 백엔드 서버 구축을 학습했습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 flex items-center">
                      <Cloud className="w-5 h-5 mr-2 text-purple-500" />
                      Cloud & AI
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Naver Cloud Platform</h4>
                        <p className="text-sm text-slate-600">
                          Naver에서 제공하는 클라우드 서비스인 Naver Cloud Platform을 활용해 클라우드 서버를 구성하고,
                          OCR API를 튜닝했으며 HTTPS 프로토콜과 라우팅, DNS를 적용했습니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">AWS</h4>
                        <p className="text-sm text-slate-600">
                          AWS를 활용해 클라우드 서버를 구성했습니다. AWS의 EC2, S3, RDS, Route 53, Bedrock, Lambda, API Gateway를 활용했습니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">LLM (ChatGPT4, Gemma)</h4>
                        <p className="text-sm text-slate-600">
                          LLM모델인 ChatGPT4의 API를 통해 비서기능을, Gemma를 통해 토큰 최적화와 더 높은 성능을
                          이끌어냈습니다. 그 과정에서 Prompt Engineering 또한 진행할 수 있었습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-orange-500" />
                      Computer Vision & DevOps
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Computer Vision (OpenCV, Tesseract)</h4>
                        <p className="text-sm text-slate-600">
                          OpenCV와 Tesseract를 활용해 OCR을 구현, 테스트를 마쳤습니다. Naver OCR과의 정확도 비교와
                          속도를 테스팅하고 이에 대해 비교를 진행했습니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Fastlane</h4>
                        <p className="text-sm text-slate-600">
                          모바일 CI/CD 툴인 Fastlane을 활용해 앱스토어 / 테스트플라이트 배포 자동화를 진행했습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border">
          <Button variant="outline" size="sm" onClick={prevSection} disabled={currentSection === 0}>
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex space-x-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSection(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSection === index ? "bg-green-500" : "bg-slate-300"
                }`}
              />
            ))}
          </div>

          <Button variant="outline" size="sm" onClick={nextSection} disabled={currentSection === sections.length - 1}>
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
