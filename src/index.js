import './menu';
import './styles';
import { onComponentMount, onComponentUnmount } from './componentTracker';

/**
 * эту функуцию лучше не использовать, старайтесь менять стили без нее
 * ВАЖНО! если НЕ ИСПОЛЬЗОВАТЬ ИМПОРТЫ или НЕ ИМПОРТИРОВАТЬ ФАЙЛ, то файл с хуком не будет билдится
 * соответственно хук устанавливаться не будет
 */
onComponentMount.push((name, component) => {
    console.log(`Компонент создан: ${name}`);
    console.log(component.element);
})

onComponentUnmount.push((name, component) => {
	console.log(`Компонент удален: ${name}`);
	console.log(component.element/*.className*/);
});