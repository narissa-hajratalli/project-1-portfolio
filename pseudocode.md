#### CREATING THE NAV BAR USING jQUERY
SET navBar equal to "About Me", "Projects", and "Contact Me"  <br />
CREATE unordered list  <br />
APPEND unordered list to <nav>  <br />
PROCEDURE addToNavBar  <br />
    FOR EACH element in navBar <br />
        CREATE a list element <br />
        ADD class equal to "nav-element"  <br />
        REMOVE bullet points  <br />
        SET display to inline-flex   <br />
        ADD text  <br />
        APPEND list elements to unordered list  <br />
    END FOR EACH  <br />
END PROCEDURE   <br /> 

#### HAMBURGER MENU 
PROCEDURE addToNavBar <br />
    ADD class of 'hidden' to each li  <br />
    ADD a href to each li  <br />
END PROCEDURE

PROCEDURE on click <br />
    display nav-element as block <br />
    add background color of white and opacity of 0.5 <br />
    float right <br />
END PROCEDURE


    

