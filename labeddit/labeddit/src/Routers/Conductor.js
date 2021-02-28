export const goToLoginPage = (history) => {
    history.push("/")
}

export const goToCadastroPage = (history) => {
    history.push("/cadastro")
}

export const goToFeedPage = (history) => {
    history.push("/feed")
}

export const goToDetalhesPostPage = (history, id) => {
    history.push(`/detalhes/${id}`)
}

export const goBack = (history) => {
    history.goBack();
}