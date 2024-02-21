interface Address {
  bairro?: string;
  cep?: string;
  complemento?: string;
  localidade?: string;
  logradouro?: string;
  uf?: string;
}

type Props = { response: Address };

export function Table({ response }: Props) {
  return (
    <>
      {response && (
        <div className="relative overflow-x-auto">
          {response.uf || response.localidade ? (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    UF
                  </th>
                  <th scope="col" className="px-6 py-3">
                    CIDADE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    BAIRRO
                  </th>
                  <th scope="col" className="px-6 py-3">
                    LOGRADOURO
                  </th>
                  <th scope="col" className="px-6 py-3">
                    COMPLEMENTO
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                  <td className="px-6 py-4">{response.uf}</td>
                  <td className="px-6 py-4">{response.localidade}</td>
                  <td className="px-6 py-4">
                    {response.bairro ? response.bairro : "-"}
                  </td>
                  <td className="px-6 py-4">
                    {response.logradouro ? response.logradouro : "-"}
                  </td>
                  <td className="px-6 py-4">
                    {response.complemento ? response.complemento : "-"}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <span className=" text-3xl text-red-600 font-semibold tracking-tight outline-none">
              CEP INEXISTENTE!
            </span>
          )}
        </div>
      )}
    </>
  );
}
