import React, { useState } from 'react';
import Style from "../styles/FarmerCertificationsGet.module.css";
import { ICustomOfDestiny } from '@/interface/certificationsTypes';

const CustomOfDestinyGet: React.FC<{ customOfDestiny: ICustomOfDestiny }> = ({ customOfDestiny }) => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [visibleButtons, setVisibleButtons] = useState([true, true, true]); // Control visibility of buttons
  
  const { ImportDeclaration, InspectionCertificate, ImportPermit } = customOfDestiny;
  const images = [ImportDeclaration, InspectionCertificate, ImportPermit];
  
  const handleImageChange = (image: string, index: number) => {
    setCurrentImage(image);
    setVisibleButtons(visibleButtons.map((_, i) => i !== index)); // Show only other buttons
  };
  
  return (
    <div id='MainContainer' className="flex flex-col justify-center items-center w-[100%] max-h-[40rem] overflow-y-auto">
      <h2 style={{ marginLeft: "1rem" }} className={Style.FarmeH2}>Custom Of Destiny</h2>
      
      <div className="flex flex-col">
        {visibleButtons[0] && (
          <button 
            onClick={() => handleImageChange(ImportDeclaration, 0)}
            className={Style.FarmeButton}
          >
            Import Declaration
          </button>
        )}
        {visibleButtons[1] && (
          <button 
            onClick={() => handleImageChange(InspectionCertificate, 1)}
            className={Style.FarmeButton}
          >
            Inspection Certificate
          </button>
        )}
        {visibleButtons[2] && (
          <button 
            onClick={() => handleImageChange(ImportPermit, 2)}
            className={Style.FarmeButton}
          >
            Import Permit
          </button>
        )}
      </div>

      {currentImage && (
        <div className="flex flex-col items-center mt-4">
          <img src={currentImage} alt="Logistic Image" className="mb-4" style={{ width: '75%' }} />
          <div className="flex flex-col">
            {visibleButtons.map((visible, index) => visible && (
              <button 
                key={index}
                onClick={() => handleImageChange(images[index], index)}
                className={Style.FarmeButton}
              >
                {index === 0 ? 'Import Declaration' : index === 1 ? 'Inspection Certificate' : 'Import Permit'}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomOfDestinyGet;
