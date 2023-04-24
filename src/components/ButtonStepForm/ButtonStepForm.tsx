import { Link, useNavigate } from "react-router-dom";
import { useFormStep } from "../../hooks/useFormStep";
import { steps } from "../MultiStepForm/SidebarSteps/SidebarSteps";
import { RenderConditional } from "../RenderConditional";

export const ButtonStepForm: React.FC = () => {
  const { currentStep, handlePrevStep, data } = useFormStep();
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-6">
      <button className="text-gray-500">
        <RenderConditional condition={currentStep === 0}>
          <Link to="/login">Voltar para login</Link>
        </RenderConditional>

        <RenderConditional condition={currentStep !== 0}>
          <button onClick={handlePrevStep}>Voltar</button>
        </RenderConditional>
      </button>

      <button className="p-2 bg-[#333] rounded-[4px] text-white">
        Próximo
      </button>
    </div>
  );
};
