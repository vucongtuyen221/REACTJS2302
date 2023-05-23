import React from 'react'
import { getImageUrl } from '../../utils/imageHelper';
interface IPerson {
    name: string;
    imageId: string;
}
interface IAvartarProps {
    size?: number;
    person: IPerson;
}

function Avatar({size =100, person}: IAvartarProps) {
  return (
    <img 
    src={getImageUrl(person.imageId)}
     alt={person.name} 
     width={size}
     height={size}
    />
  )
}
 
export default function Profile() {
  return (
    <div>
      <Avatar 
        //  size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh',
        }}
      />
      <Avatar
        size={50}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6',
        }}
      />
    </div>
  );
}                          
 