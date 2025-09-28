export default function destructuring({ special = [] }) {
	const newArrayExtendsAttack = [];

	for (const { id, name, description, icon } of special) {
		newArrayExtendsAttack.push({
			id,
			name,
			description: description !== undefined ? description : 'Описание недоступно',
			icon,
		});
	}

	return newArrayExtendsAttack;
}