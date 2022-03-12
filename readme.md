This is a react practice project, in which i used only bare minimum basic knowledge of
React components with CSS Module and useState hook, to create a completely independent
and working Form submission and list display application.

What i Learned -
1. How React Components interact with each other
2. passing information among components in both directions, that is, up and down the DOM tree
3. useState hook to maintain component state
4. how to add CSS using CSS Module
5. props.children property of every component
6. bootstrapping a react application

further i learned about -

Fragments : Limitations with JSX code and how Fragments help us in overcome them.


Portals : How to get a cleaner DOM and a better code structure using Portals.

While creating error modal, we kept it alongside our view, that is working correctly just because
we put correct styling on it. But logically, it should be above everything else, but in actuality
we wrote it alongside the working code. This is not a good coding practice.

This problem will be there for all types of overlays.

We have Portals to the rescue, from coding perspective, the code will be exactly same, but when
the modal will be opened, its code will not appear alongside other UI code, as was written, but
will be appended to the DOM, outside of the component structure.


refs: they allow us to access other DOM elements, and work with them. 
while getting input from user, at every keystroke, we were updating our state, but, we only needed
that state to be updated, when we go to submit the form. This is one of the places where we can use
refs.
With refs we can setup a connection between HTML content which is being rendered and our JS code.
Although, you can update DOM using refs, but rarely attempt that. Refs should be preferred where
you just need to read the value. Never attempt to update the DOM using Refs, because that is not
tracked by React.

Uncontrolled component: component in which we access the value using refs, as it is not controlled by React.
This uncontrolled component discussion generally arises around form/input related components.

controlled component: state handled/read/updated by React.
