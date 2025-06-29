import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineExternalLink,
} from "react-icons/hi";

const Publications = () => {
  return (
    <section id="publications" className="py-16 max-w-6xl mx-auto px-4 md:px-8 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-3">
          Publications
        </h2>
        <div className="w-20 h-1 bg-[#9fbc49] mx-auto mb-4"></div>
        <p className="text-sm uppercase tracking-wider text-gray-500">
          My Research Work
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
          <div className="p-4">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 text-xs font-medium text-[#333] bg-[#e5e7eb] rounded-full mb-4">
                6th International Conference on Communication and Computational
                Technologies (ICCCT 2024)
              </span>

              <div className="flex items-center justify-center gap-2 text-[#555] mb-6">
                <HiOutlineLocationMarker className="text-lg text-[#9fbc49]" />
                <p className="text-sm">
                  Rajasthan Institute of Engineering and Technology, Jaipur,
                  India
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#333] mb-4 leading-tight">
                <span className="text-[#9fbc49]">🎙️</span> A 3D CNN Model with
                Multi-Feature Fusion for Enhancing Human Emotion Recognition
                from Speech
              </h3>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-200">
                  <HiOutlineCalendar className="text-base text-[#9fbc49]" />
                  <span>Published: January 2024</span>
                </div>
                <a
                  href="https://link.springer.com/chapter/10.1007/978-981-97-7426-5_22"
                  className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-200 hover:bg-[#f8f8f8] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineExternalLink className="text-base text-[#9fbc49]" />
                  <span className="text-[#333] font-medium">
                    View Paper on Springer
                  </span>
                </a>
              </div>

              <div className="text-sm text-[#333] font-medium bg-white inline-block px-4 py-2 rounded-lg border border-gray-200">
                📄 DOI: 10.1007/978-981-97-7426-5_22
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-bold text-[#333] mb-4 flex items-center">
                <span className="w-4 h-4 bg-[#9fbc49] rounded-full mr-2"></span>
                Research Highlights
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#9fbc49] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Designed a 3D Convolutional Neural Network (CNN) to classify
                    human emotions from raw speech inputs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#9fbc49] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Proposed a multi-feature fusion technique using MFCC, Chroma
                    Shift (CS), and Mel-Spectrogram (MeS) to form a 3D tensor
                    for capturing emotional cues.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#9fbc49] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Achieved improved accuracy over existing models by combining
                    spatial and spectral features in a 3D architecture.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#9fbc49] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Novel feature-stacking method along the Z-axis enhances
                    temporal emotion representation in speech.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
