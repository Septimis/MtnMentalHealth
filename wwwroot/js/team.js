const providingTeamWrappers = document.querySelectorAll('#providingTeamWrapper > .memberWrapper');

for(let i = 0; i < providingTeamWrappers.length; i++) {
    providingTeamWrappers[i].addEventListener('click', () => {
        if(isFocused() && !providingTeamWrappers[i].classList.contains('focusedMember'))
            return;
        providingTeamWrappers[i].classList.toggle('focusedMember');
    });
}

function isFocused() {
    for(let i = 0; i < providingTeamWrappers.length; i++) {
        if(providingTeamWrappers[i].classList.contains('focusedMember'))
            return true;
    }
    return false;
}