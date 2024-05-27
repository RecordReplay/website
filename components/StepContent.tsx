import { FC } from "react";
import FetchData from "../components/FetchData";

interface StepContentProps {
  currentStep: number;
}

const StepContent: FC<StepContentProps> = ({ currentStep }) => {
  if (currentStep === 1) {
    return (
      <div>
        <h3 className="font-bold text-pink-600">Capturing events</h3>
        <p>Replay captured that mouse event so we can inspect it later.</p>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div>
        <h3 className="font-bold text-pink-600">Network events</h3>
        <p>We just made this API call:</p>
        <div className="text-xs">
          <FetchData />
        </div>
      </div>
    );
  }

  if (currentStep === 3) {
    return (
      <div>
        <h3 className="font-bold text-pink-600">Console logs (on the fly!)</h3>
        <p>
          Replay allows you to set console logs on the fly, which is a game
          changer.
        </p>
      </div>
    );
  }

  return null;
};

export default StepContent;
