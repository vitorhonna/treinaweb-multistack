import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation'

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />

      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <UserInformation
        name={'Vitor Honna'}
        picture={'https://github.com/vitorhonna.png'}
        rating={4}
        description={'Campinas/SP'}
      />

      <UserInformation
        name={'Mayk Brito'}
        picture={'https://github.com/maykbrito.png'}
        rating={5}
        description={'São Paulo/SP'}
      />
    </div>
  )
}

export default Home
