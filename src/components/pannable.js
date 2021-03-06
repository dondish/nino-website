export function pannable(node) {
	let x;
    let y;
    
    function getXYFromTouch(touches) {
        let x = 0;
        let y = 0;
        for (let i = 0; i < touches.length; i++) {
            x += touches[i].pageX
            y += touches[i].pageY
        }
        x /= touches.length;
        y /= touches.length;
        return {x, y}
    }

	function handleMousedown(event) {
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panstart', {
			detail: { x, y }
		}));

        window.addEventListener('mousemove', handleMousemove, {passive: true});
		window.addEventListener('mouseup', handleMouseup, {passive: true});
	}

	function handleMousemove(event) {
		const dx = event.clientX - x;
		const dy = event.clientY - y;
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panmove', {
			detail: { x, y, dx, dy }
		}));
	}

	function handleMouseup(event) {
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panend', {
			detail: { x, y }
		}));

		window.removeEventListener('mousemove', handleMousemove);
		window.removeEventListener('mouseup', handleMouseup);
    }
    
    function handleTouchStart(event) {
        let touches = event.changedTouches;
        let xy = getXYFromTouch(touches);
		x = xy.x;
		y = xy.y;

		node.dispatchEvent(new CustomEvent('panstart', {
			detail: { x, y }
		}));

        window.addEventListener('touchmove', handleTouchMove, {passive: true});
		window.addEventListener('touchend', handleTouchEnd, {passive: true});
    }

    function handleTouchMove(event) {
		event.preventDefault();
        let touches = event.changedTouches;
        let xy = getXYFromTouch(touches);
		const dx = xy.x - x;
		const dy = xy.y - y;
		x = xy.x;
		y = xy.y;

		node.dispatchEvent(new CustomEvent('panmove', {
			detail: { x, y, dx, dy }
		}));
	}

	function handleTouchEnd(event) {
        let touches = event.changedTouches;
        let xy = getXYFromTouch(touches);
		x = xy.x;
		y = xy.y;

		node.dispatchEvent(new CustomEvent('panend', {
			detail: { x, y }
		}));

		window.removeEventListener('touchmove', handleTouchMove);
		window.removeEventListener('touchend', handleTouchEnd);
    }


    node.addEventListener('touchstart', handleTouchStart, {passive: true})
	node.addEventListener('mousedown', handleMousedown, {passive: true});

	return {
		destroy() {
            node.removeEventListener('mousedown', handleMousedown);
            node.removeEventListener('touchstart', handleTouchEnd);
		}
	};
}