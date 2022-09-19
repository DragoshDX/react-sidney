import { render as renderPet } from './pet.js';

export const render = (contact) => {
  const { name, surname, phone, email, pets = [] } = contact;
  const container = document.createElement('article');
  container.classList.add('contact', 'border', 'p-3', 'mb-4');

  container.innerHTML = `
    <h1>${name + ' ' + surname}</h1>
    <ul>
      <li>${phone}</li>
      <li>${email}</li>
    </ul>
    <button title="Delete"
      type="button"
      class="btn btn-secondary delete-friend"
    >Delete</button>

    <button title="Edit"
      type="button"
      class="btn btn-secondary mx-2"
    >Edit</button>

    <button title="Add pet"
      type="button"
      class="btn btn-secondary"
    >Add pet</button>
  `;

  const petUl = document.createElement('ul');

  pets.forEach((pet) => {
    const renderedPet = renderPet(pet);
    const petLi = document.createElement('li');
    petLi.append(renderedPet);
    petUl.append(petLi);
  });

  container.append(petUl);

  return container;
};
