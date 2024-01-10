/* eslint-disable react/prop-types */

export default function ClassStudents({ classStudents, group }) {
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          {group}
        </td>
      </tr>
      {classStudents.map((student) => (
        <>
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{student.id}</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={`https://i.pravatar.cc/80/${student.id}`}
                  width="32"
                  height="32"
                  alt={student.name}
                />
                <span className="whitespace-nowrap">{student.name}</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {student.score}
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {student.percentage}
            </td>
          </tr>
        </>
      ))}
    </>
  );
}
