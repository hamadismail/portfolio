import React, { useState } from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from "react-icons/hi";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="qualification" className="py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#333333] mb-2">
        Qualification
      </h2>
      <span className="block text-center text-sm text-gray-500 mb-10">
        My Journey
      </span>

      <div className="max-w-md mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-6">
          <button
            className={`flex items-center text-lg font-medium cursor-pointer transition-colors ${
              toggleState === 1
                ? "text-[#9fbc49] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => toggleTab(1)}
          >
            <HiOutlineAcademicCap className="text-2xl mr-2" />
            Education
          </button>
          <button
            className={`flex items-center text-lg font-medium cursor-pointer transition-colors ${
              toggleState === 2
                ? "text-[#9fbc49] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => toggleTab(2)}
          >
            <HiOutlineBriefcase className="text-2xl mr-2" />
            Experience
          </button>
        </div>

        {/* Sections */}
        <div className="grid justify-center grid-cols-1">
          {/* Education Tab */}
          {toggleState === 1 && (
            <div className="">
              {/* Item 1 */}
              <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 items-center">
                <div>
                  <h3 className="text-base font-medium text-[#333]">B.Sc in Computer Science and Engineering</h3>
                  <span className="block text-sm text-gray-500 mb-1">
                    Green University of Bangladesh
                  </span>
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <HiOutlineCalendar /> 2020 - 2024
                  </div>
                </div>
                <div className="flex flex-col items-center h-full">
                  <span className="w-3 h-3 rounded-full bg-gray-700"></span>
                  <span className="w-px flex-1 bg-gray-400"></span>
                </div>
              </div>

              {/* Item 2 */}
              {/* <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 items-center">
                <div></div>
                <div className="flex flex-col items-center h-full">
                  <span className="w-3 h-3 rounded-full bg-gray-700"></span>
                  <span className="w-px flex-1 bg-gray-400"></span>
                </div>

                <div>
                  <h3 className="text-base font-medium text-[#333]">
                    Web Development
                  </h3>
                  <span className="block text-sm text-gray-500 mb-1">
                    Full Sail University
                  </span>
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <HiOutlineCalendar /> 2018 - 2021
                  </div>
                </div>
              </div> */}

              {/* Item 3 */}
              {/* <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 items-center">
                <div>
                  <h3 className="text-base font-medium text-[#333]">
                    UI/UX Design
                  </h3>
                  <span className="block text-sm text-gray-500 mb-1">
                    UX Academy
                  </span>
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <HiOutlineCalendar /> 2021 - 2022
                  </div>
                </div>
                <div className="flex flex-col items-center h-full">
                  <span className="w-3 h-3 rounded-full bg-gray-700"></span>
                  <span className="w-px flex-1 bg-gray-400"></span>
                </div>
              </div> */}
            </div>
          )}

          {/* Experience Tab */}
          {toggleState === 2 && (
            <div className="space-y-10">
              {/* Item 1 */}
              {/* <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 items-center">
                <div>
                  <h3 className="text-base font-medium text-[#333]">B.Sc in Computer Science and Engineering</h3>
                  <span className="block text-sm text-gray-500 mb-1">
                    Green University of Bangladesh
                  </span>
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <HiOutlineCalendar /> 2020 - 2024
                  </div>
                </div>
                <div className="flex flex-col items-center h-full">
                  <span className="w-3 h-3 rounded-full bg-gray-700"></span>
                  <span className="w-px flex-1 bg-gray-400"></span>
                </div>
              </div> */}

              {/* Item 2 */}
              <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 items-center">
                <div></div>
                <div className="flex flex-col items-center h-full">
                  <span className="w-3 h-3 rounded-full bg-gray-700"></span>
                  <span className="w-px flex-1 bg-gray-400"></span>
                </div>

                <div>
                  <h3 className="text-base font-medium text-[#333]">
                    SQA Intern
                  </h3>
                  <span className="block text-sm text-gray-500 mb-1">
                    Bangladesh Computer Council - BCC
                  </span>
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <HiOutlineCalendar /> 2023
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
