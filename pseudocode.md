# For the carasoul 
- [Carousel](https://codepen.io/desandro/pen/jEpxqJ?editors=0100)

# ------CREATING THE NAV BAR----- 
SET navBar equal to "About Me", "Projects", and "Contact Me"
CREATE unordered list 
APPEND unordered list to <nav>
PROCEDURE addToNavBar 
    FOR EACH element in navBar
        CREATE a list element
        ADD class equal to "nav-element"
        REMOVE bullet points
        SET display to inline
        APPEND list elements to unordered list
    END FOR EACH
END PROCEDURE 


