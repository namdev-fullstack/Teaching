/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import React, { useEffect, memo, useMemo } from "react";
import {
  FileText,
  Code,
  Award,
  Globe,
  ArrowUpRight,
  Sparkles,
  UserCheck,
  GraduationCap,
  BookOpen,
  Users,
  Heart,
  Star,
  TvMinimalPlay,
  Target,
  Brain,
  Laptop,
  Lightbulb,
  NotebookPen,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        Về Tôi
      </h2>
    </div>
    <p
      className="mt-2 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-500" />
      Gia sư CNTT chuyên nghiệp - Đồng hành cùng con bạn
      <Sparkles className="w-5 h-5 text-purple-500" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      {/* Gradient backgrounds */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105 bg-gradient-to-br from-[#6366f1] to-[#a855f7] p-1">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center relative">
            {/* Main Content */}
            <div className="text-center text-gray-800 p-6">
              {/* Profile Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Nguyễn Khắc Tiến
              </h3>

              {/* Title */}
              <p className="text-sm text-gray-600 mb-4">
                Gia Sư CNTT Chuyên Nghiệp
              </p>

              {/* Skills Icons */}
              <div className="flex justify-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-4 h-4 text-blue-400" />
                </div>
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Laptop className="w-4 h-4 text-green-400" />
                </div>
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-4 h-4 text-yellow-400" />
                </div>
              </div>

              {/* Experience Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1 border border-blue-200">
                <Star className="w-3 h-3 text-yellow-500" />
                <span className="text-xs text-gray-700">
                  2+ Năm Kinh Nghiệm
                </span>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-1/3 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-1500"></div>

            {/* Hover Effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/5 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(
  ({ icon: Icon, color, value, label, description, animation }) => (
    <div
      data-aos={animation}
      data-aos-duration={1300}
      className="relative group"
    >
      <div className="relative z-10 bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-200/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between shadow-lg">
        <div
          className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
        ></div>

        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-50 transition-transform group-hover:rotate-6">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
          <span
            className="text-4xl font-bold text-gray-800"
            data-aos="fade-up-left"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            {value}
          </span>
        </div>

        <div>
          <p
            className="text-sm uppercase tracking-wider text-gray-600 mb-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
          >
            {label}
          </p>
          <div className="flex items-center justify-between">
            <p
              className="text-xs text-gray-500"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              {description}
            </p>
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  )
);

const AboutPage = () => {
  // Memoized calculations
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(
      localStorage.getItem("certificates") || "[]"
    );

    const startDate = new Date("2021-11-06");
    const today = new Date();
    const experience =
      today.getFullYear() -
      startDate.getFullYear() -
      (today <
      new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())
        ? 1
        : 0);

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length,
      YearExperience: experience,
    };
  }, []);

  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Memoized stats data
  const statsData = useMemo(
    () => [
      {
        icon: Users,
        color: "from-[#6366f1] to-[#a855f7]",
        value: "100+",
        label: "Lớp Đã Dạy",
        description: "Học sinh cấp 2, cấp 3",
        animation: "fade-right",
      },
      {
        icon: Award,
        color: "from-[#a855f7] to-[#6366f1]",
        value: "2+",
        label: "Năm Kinh Nghiệm",
        description: "Tại MindX Education",
        animation: "fade-up",
      },
      {
        icon: GraduationCap,
        color: "from-[#6366f1] to-[#a855f7]",
        value: "HUBT",
        label: "Tốt Nghiệp",
        description: "Trường Kinh doanh và Công nghệ",
        animation: "fade-left",
      },
    ],
    []
  );

  return (
    <div
      className="h-auto pb-[10%] text-gray-800 overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="About"
    >
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Xin chào, tôi là
              </span>
              <span
                className="block mt-2 text-gray-400"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                Nguyễn Khắc Tiến
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-justify pb-4 sm:pb-0">
              <div
                className="flex items-start gap-3"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <Heart className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <p>
                  Là giáo viên CNTT với hơn 2 năm kinh nghiệm giảng dạy tại
                  MindX Education.
                </p>
              </div>

              <div
                className="flex items-start gap-3"
                data-aos="fade-right"
                data-aos-duration="1600"
              >
                <GraduationCap className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <p>
                  Tốt nghiệp Trường Kinh doanh và Công nghệ Hà Nội, chuyên ngành
                  Công nghệ thông tin.
                </p>
              </div>

              <div
                className="flex items-start gap-3"
                data-aos="fade-right"
                data-aos-duration="1700"
              >
                <Target className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p>
                  Chuyên dạy Python và Web Development cho học sinh cấp 2, cấp
                  3, sinh viên.
                </p>
              </div>

              <div
                className="flex items-start gap-3"
                data-aos="fade-right"
                data-aos-duration="1800"
              >
                <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <p>
                  Với phương pháp giảng dạy thân thiện, giáo trình chi tiết và
                  bài tập thực hành, tôi cam kết giúp con bạn phát triển tư duy
                  lập trình và kỹ năng CNTT một cách hiệu quả nhất.
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div
              className="relative bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#a855f7]/5 border border-gradient-to-r border-[#6366f1]/30 rounded-2xl p-4 my-6 backdrop-blur-md shadow-2xl overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              {/* Floating orbs background */}
              <div className="absolute top-2 right-4 w-16 h-16 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-2 w-12 h-12 bg-gradient-to-r from-[#a855f7]/20 to-[#6366f1]/20 rounded-full blur-lg"></div>

              {/* Quote icon */}
              <div className="absolute top-3 left-4 text-[#6366f1] opacity-30">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              <blockquote className="text-gray-700 text-center lg:text-left italic font-medium text-sm relative z-10 pl-6">
                "Mỗi học sinh đều có tiềm năng riêng. Nhiệm vụ của tôi là khơi
                dậy và phát triển tiềm năng đó."
              </blockquote>
            </div>

            {/* Services Section */}
            <div
              className="space-y-4"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                Dịch vụ gia sư:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/80 border border-blue-200/50 shadow-sm">
                  <Code className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 text-sm">
                    Python Programming
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/80 border border-blue-200/50 shadow-sm">
                  <Globe className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 text-sm">Web Development</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/80 border border-blue-200/50 shadow-sm">
                  <BookOpen className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700 text-sm">
                    Giáo trình chi tiết
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/80 border border-blue-200/50 shadow-sm">
                  <NotebookPen className="w-5 h-5 text-indigo-400" />
                  <span className="text-gray-700 text-sm">
                    Bài tập thực hành
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/80 border border-blue-200/50 shadow-sm">
                  <UserCheck className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700 text-sm">
                    Nhận xét sau buổi học
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/80 border border-blue-200/50 shadow-sm">
                  <TvMinimalPlay className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 text-sm">
                    Thuyết trình sản phẩm cuối khóa
                  </span>
                </div>
              </div>
            </div>
          </div>

          <ProfileImage />
        </div>

        <a href="#Portofolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes spin-slower {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);
