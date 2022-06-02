import { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface Id {
  id: number;
}

export default function Links({ id }: Id) {
  return (
    <Fragment>
      <Link to={`/team/${id}/watch`} className="no-underline text-link-color mr-0.5" data-test="table-watch-link">
        Watch
      </Link>
      ,
      <Link to={`/team/${id}/edit`} className="no-underline text-link-color mx-0.5" data-test="table-edit-link">
        Edit
      </Link>
      ,
      <button className="no-underline text-link-color mx-0.5 cursor-pointer" data-test="table-delete-link">
        Delete
      </button>
    </Fragment>
  );
}
