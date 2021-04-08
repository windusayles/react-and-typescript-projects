import * as React from 'react';
import { CharacterType } from './characters';

type TableProps = { children: React.ReactNode };
type TableRowProps = {
  heading: keyof CharacterType;
  value: string | number;
};

export const Table = ({ children }: TableProps) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

export const TableRow = ({ heading, value }: TableRowProps) => {
  return (
    <tr>
      <th>{heading}</th>
      <td>{value}</td>
    </tr>
  );
};
