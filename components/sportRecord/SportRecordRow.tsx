interface ISportRecords {
  id: string;
  sportName: string;
  sportTime: string;
  sportValue: number;
}

interface Props {
  sportRecords: ISportRecords[];
}

function sportRecordRow(sportRecords: ISportRecords) {
  const { id, sportName, sportTime, sportValue } = sportRecords;

  return (
    <tr key={id} className="border-b bg-white hover:bg-gray-50">
      <td className="px-6 py-4 text-left font-medium text-gray-900">
        {sportName}
      </td>
      <td className="px-6 py-4">{sportTime}</td>
      <td className="px-6 py-4">{sportValue}</td>
      <td className="px-6 py-4">修改</td>
    </tr>
  );
}

function emptySportRecordRow() {
  return (
    <tr className="border-b bg-white hover:bg-gray-50">
      <td colSpan={10} className="px-6 py-4 text-left">
        尚未新增紀錄
      </td>
    </tr>
  );
}

export default function SportRecordRow({ sportRecords }: Props) {
  if (sportRecords.length === 0) {
    return emptySportRecordRow();
  }

  return <tbody>{sportRecords.map(sportRecordRow)}</tbody>;
}
