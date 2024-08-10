import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import TagCard from '../../components/TagCard';

export default function TagsPage() {
  return (
    <>
      <div className="text-center my-4">
        <Link href="/tag/new" passHref>
          <Button>Add A Tag</Button>
        </Link>
      </div>
      <TagCard />
    </>
  );
}
