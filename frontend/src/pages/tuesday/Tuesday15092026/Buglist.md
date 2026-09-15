the page renders normally on first load; check
the checkbox can be toggled repeatedly; check
when enabled, quantity-1 items disappear; check
increasing an item's quantity updates it correctly; check
an item that becomes quantity 2 should satisfy the filter; check
Remove deletes only the selected item; check
state updates should follow normal React practices. check



1. react-dom_client.js?v=08732868:4444 Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
<CartPractice>		
(anonymous)	@	TuesdayPractice.jsx:17
    - When trying to open the page that error message shows up and the page wont load.
    - The error message pointed to cartPractice in the tuesday component.
    - I tried to figure out what keeps rendering in the cartPractice and noticed the onToggle prop not having a callback function. so the function was triggering before the onToggle was used. the setState was depending on the previous state so i added an updater.  
    - Changed the onToggle prop to () => setHideSingleItems(hideSingleItems => !hideSingleItems)
