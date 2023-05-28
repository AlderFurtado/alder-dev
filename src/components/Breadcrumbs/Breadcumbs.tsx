import Link from "next/link";
import React from "react";
import { Wrapper } from "./Breadcumbs.styles";

// import { Container } from './styles';

interface BreadcrumbsProps {
  root: string;
  steps: string[];
}

const Breadcrumbs = ({ root, steps }: BreadcrumbsProps): JSX.Element => {
  return (
    <Wrapper>
      <Link href={root} replace>
        <p>{root} &nbsp;</p>
      </Link>
      {steps.map((step) => (
        <Link href={`/`}>
          <p key={`breadcrump ${step}`}>{`  >  ${step}`}</p>
        </Link>
      ))}
    </Wrapper>
  );
};

export default Breadcrumbs;
