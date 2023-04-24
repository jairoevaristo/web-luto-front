import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { useCreateUser } from "../../../hooks/useCreateUser";
import { useFormStep } from "../../../hooks/useFormStep";
import { RenderConditional } from "../../RenderConditional";
import { SpinnerLoading } from "../../SpinnerLoading/SpinnerLoading";

export const FinishedSignUp: React.FC = () => {
  const { data } = useFormStep();
  const { refetch, isLoading, isSuccess } = useCreateUser(data);

  if (isSuccess) {
    return (
      <div className="flex flex-col justify-center mt-10">
         <div className='flex items-center gap-4 mb-2'>
          <h1 className="text-4xl">Olha seu E-mail</h1>
          <EnvelopeIcon className='text-black w-11 h-11' />
        </div>

        <span className="text-xl text-gray-400 w-96">
          Enviamos um e-mail de confirmação para você.
        </span>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl mb-2">Quase lá!</h1>
      <span className="text-lg text-gray-400 w-96">
        Você completou as etapas com sucesso.
      </span>

      <span className="text-md text-gray-400 w-96">
        Agora basta finalizar o seu cadastro.
      </span>

      <div className="mt-10">
        <button
          className="p-3 flex items-center gap-3 bg-[#333] rounded-[4px] text-white"
          onClick={() => refetch()}
        >
          <span className="">Finalizar meu cadastro</span>
          <RenderConditional condition={isLoading}>
            <SpinnerLoading size="SMALL" />
          </RenderConditional>
        </button>
      </div>
    </div>
  );
};
