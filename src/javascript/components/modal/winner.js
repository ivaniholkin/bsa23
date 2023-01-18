import { createFighterImage } from '../fighterPreview';
import { createElement } from '../../helpers/domHelper';
import { showModal } from './modal';

export function showWinnerModal(fighter) {
  // call showModal function 
  const winner = createFighter(fighter);
  showModal({ title:`${fighter.name} Win`,
        bodyElement: winner,
        onClose: ()=>{
            document.location.reload()
        }
    })
}
function createFighter(fighter) {
  const imgElement = createFighterImage(fighter);
  const fighterElement = createElement({
      tagName: 'div',
  });
  fighterElement.append(imgElement);
  return fighterElement;
}
