import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import TeamsTable from '../components/TeamsTable';
import { Team } from '../utils/types.d';

export default function Home() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    axios.get('/api/v1/teams').then((res) => {
      const { data } = res;
      setTeams(data);
    });
  }, []);

  return (
    <section>
      <PageTitle title={'LIST OF TEAMS'} />
      <span className="text-lg" data-test="home-information">
        There are {teams.length} teams
      </span>
      <button
        className="border-none font-arial text-center no-underline inline-block font-bold text-sm rounded cursor-pointer ml-1 bg-gradient-to-b from-btn-linear-first to-btn-linear-second py-0.5 px-2"
        data-test="btn-add-new-team"
      >
        <Link to="/create-team">Add</Link>
      </button>
      <TeamsTable teams={teams} />
    </section>
  );
}
