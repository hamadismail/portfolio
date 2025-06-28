import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineExternalLink,
} from "react-icons/hi";

const Publications = () => {
  return (
    <section id="publications" className="py-12 px-4 md:px-8 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333333] mb-2">
        Publications
      </h2>
      <span className="block text-center text-sm text-gray-500 mb-10">
        My Research
      </span>

      <div className="max-w-4xl mx-auto bg-[#f9f9f9] border border-gray-300 rounded-xl shadow-md p-8">
        <p className="text-[#333] text-center text-sm mb-6">
          6th International Conference on Communication and Computational
          Technologies (ICCCT 2024)
        </p>

        <div className="flex items-center justify-center gap-2 text-[#555] mb-6">
          <HiOutlineLocationMarker className="text-lg" />
          <p>
            Rajasthan Institute of Engineering and Technology, Jaipur, India
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[#333] mb-2 text-center leading-snug">
          🎙️ A 3D CNN Model with Multi-Feature Fusion for Enhancing Human
          Emotion Recognition from Speech
        </h3>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-1">
            <HiOutlineCalendar className="text-base text-[#333]" />
            <span>Published: January 2024</span>
          </div>
          <div className="flex items-center gap-1">
            <HiOutlineExternalLink className="text-base text-[#333]" />
            <a
              href="https://link.springer.com/chapter/10.1007/978-981-97-7426-5_22"
              className="hover:underline text-[#333] font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Paper on Springer
            </a>
          </div>
        </div>

        <div className="text-sm text-[#333] font-medium text-center mb-6">
          📄 DOI: 10.1007/978-981-97-7426-5_22
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-[#333] mb-3">
            🔍 Highlights:
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#9fbc49] mt-1" />
              <span>
                Designed a 3D Convolutional Neural Network (CNN) to classify
                human emotions from raw speech inputs.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#9fbc49] mt-1" />
              <span>
                Proposed a multi-feature fusion technique using MFCC, Chroma
                Shift (CS), and Mel-Spectrogram (MeS) to form a 3D tensor for
                capturing emotional cues.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#9fbc49] mt-1" />
              <span>
                Achieved improved accuracy over existing models by combining
                spatial and spectral features in a 3D architecture.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#9fbc49] mt-1" />
              <span>
                Novel feature-stacking method along the Z-axis enhances temporal
                emotion representation in speech.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Publications;
