import Links from './Links';
import { Team } from '../utils/types.d';

interface Props {
  teams: Team[];
}

export default function TeamsTable({ teams }: Props) {
  return (
    <table className="border-collapse text-left text-black m-auto table-auto" data-test="teams-table">
      <thead className="bg-charcoal-dark text-ghostwhite text-center font-bold" data-test="teams-table-thead">
        <tr>
          <th className="border-2 border-black divide-solid p-2">Team name</th>
          <th className="border-2 border-black divide-solid p-2">Country</th>
          <th className="border-2 border-black divide-solid p-2">Actions</th>
        </tr>
      </thead>
      <tbody data-test="all-teams-table">
        {teams.map((team) => (
          <tr className="odd:bg-dark-green even:bg-ligth-green" key={team.id} data-test="team-row">
            <td className="border-2 border-black divide-solid p-2">{team.shortName}</td>
            <td className="border-2 border-black divide-solid p-2">{team.area.name}</td>
            <td className="border-2 border-black divide-solid p-2">
              <Links id={team.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
