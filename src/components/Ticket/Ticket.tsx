import React from "react";
import { useLocation } from "react-router-dom";

export const Ticket: React.FC = () => {
  const location = useLocation();
  const isUrlValid = location.pathname.includes("/usuario/pagamento");

  return (
    <div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
              <img className="h-8 w-8 mr-2" src="https://web-luto.vercel.app/assets/LogoIcon-84ed006c.svg"
                  alt="Logo" />
              <div className="text-gray-700 font-semibold text-lg">Web Luto Company</div>
          </div>
          {isUrlValid && (<div className="text-gray-700">
              <div className="font-bold text-xl mb-2">Pedido</div>
              <div className="text-sm">Data da compra: 01/05/2023</div>
              <div className="text-sm">Pedido ID # INV12345</div>
          </div>)}
      </div>
      <div className="border-b-2 border-gray-300 pb-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Dados Pessoais:</h2>
          <div className="text-gray-700 mb-2">Jairo Evaristo</div>
          <div className="text-gray-700 mb-2">Nome da rua</div>
          <div className="text-gray-700 mb-2">Cidade, CE 234</div>
          <div className="text-gray-700">jairoevaristo@example.com</div>
      </div>
      <table className="w-full text-left mb-8">
          <thead>
              <tr className="border-b">
                  <th className="text-gray-700 font-bold uppercase py-2"></th>
                  <th className="text-gray-700 font-bold uppercase py-2">Nome</th>
                  <th className="text-gray-700 font-bold uppercase py-2">Quantidade</th>
                  <th className="text-gray-700 font-bold uppercase py-2">Preço</th>
                  <th className="text-gray-700 font-bold uppercase py-2">Total</th>
              </tr>
          </thead>
          <tbody>
              <tr className="border-b">
                  <td className="py-4 text-gray-700">
                    <img className="w-14" src="" alt="" />
                  </td>
                  <td className="py-4 text-gray-700">
                    <div className="overflow-hidden truncate w-36 ...">
                      Product 3dsdsdsddssdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd
                    </div>
                  </td>
                  <td className="py-4 text-gray-700 text-center">1</td>
                  <td className="py-4 text-gray-700">$100.00</td>
                  <td className="py-4 text-gray-700">$100.00</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 text-gray-700">
                  <img className="w-14" src="" alt="" />
                </td>
                <td className="py-4 text-gray-700">
                  <div className="overflow-hidden truncate w-36 ...">
                    Product 3dsdsdsddssdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd
                  </div>
                </td>
                <td className="py-4 text-gray-700 text-center">2</td>
                <td className="py-4 text-gray-700">$50.00</td>
                <td className="py-4 text-gray-700">$100.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-4 text-gray-700">
                <img className="w-14" src="" alt="" />
              </td>
                <td className="py-4 text-gray-700 max-w-0">
                  <div className="overflow-hidden truncate w-36 ...">
                    Product 3dsdsdsddssdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd
                  </div>
                </td>
                <td className="py-4 text-gray-700 text-center">3</td>
                <td className="py-4 text-gray-700">$75.00</td>
                <td className="py-4 text-gray-700">$225.00</td>
            </tr>
        </tbody>
    </table>
    
    <div className="flex justify-end mb-8">
        <div className="text-gray-700 mr-2">Total:</div>
        <div className="text-gray-700 font-bold text-md">$450.50</div>
    </div>
    <div className="border-t-2 border-gray-300 pt-8 mb-8">
        <div className="text-gray-700 leading-normal mb-2">Nossa loja online oferece uma experiência conveniente e discreta, permitindo que você explore nosso catálogo completo de caixões no conforto da sua casa.  Além disso, nossa equipe de atendimento ao cliente está sempre disponível para responder a quaisquer perguntas ou fornecer assistência personalizada durante todo o processo de compra.</div>
    </div>
  </div>         
  );
};
