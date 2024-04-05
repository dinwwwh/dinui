export default function TypographyTable() {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t border-gray-200 dark:border-gray-800 p-0 even:bg-gray-100 dark:even:bg-gray-900">
            <th className="border border-gray-200 dark:border-gray-800 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              King's Treasury
            </th>
            <th className="border border-gray-200 dark:border-gray-800 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              People's happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t border-gray-200 dark:border-gray-800 p-0 even:bg-gray-100 dark:even:bg-gray-900">
            <td className="border border-gray-200 dark:border-gray-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Empty
            </td>
            <td className="border border-gray-200 dark:border-gray-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Overflowing
            </td>
          </tr>
          <tr className="m-0 border-t border-gray-200 dark:border-gray-800 p-0 even:bg-gray-100 dark:even:bg-gray-900">
            <td className="border border-gray-200 dark:border-gray-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Modest
            </td>
            <td className="border border-gray-200 dark:border-gray-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Satisfied
            </td>
          </tr>
          <tr className="m-0 border-t border-gray-200 dark:border-gray-800 p-0 even:bg-gray-100 dark:even:bg-gray-900">
            <td className="border border-gray-200 dark:border-gray-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Full
            </td>
            <td className="border border-gray-200 dark:border-gray-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Ecstatic
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
