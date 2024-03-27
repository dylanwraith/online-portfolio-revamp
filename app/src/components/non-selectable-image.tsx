import styled from 'styled-components';

const NonSelectableImage = styled.img({
	'-webkit-user-drag': 'none',
	userSelect: 'none',
	MozUserSelect: 'none',
	WebkitUserSelect: 'none',
	msUserSelect: 'none',
});

export default NonSelectableImage;
