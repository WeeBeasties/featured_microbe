// FEATURED MICROBES
// Each featured microbe has five defined fields:
//   splash   = the standard banner for the feature
//   pix      = the image (350px x 220px) stored in ./images/microbes
//   name     = the genus and species of the microbe
//   caption  = a short description of the microbe
//   provider = attribution of the image source
// © MIT by Clifton Franklund, 2018

var microbes=new Array()

microbes[0]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/11155.jpg" alt="Staphylococcus aureus" width="350" /></p><p class="name">Staphylococcus aureus</p><p class="caption">Under a high magnification of 10,000X, this digitally-colorized scanning electron microscopic (SEM) image shows a strain of <em>Staphylococcus aureus</em> bacteria taken from a vancomycin intermediate resistant culture (VISA).</p><p class="provider">CDC/ Matthew J. Arduino, DRPH</p></div>'

microbes[1]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/3077.jpg" alt="Peptostreptococcus" width="350" /></p><p class="name">Peptostreptococcus</p><p class="caption"><em>Peptostreptococcus</em> spp. are anaerobic bacteria, which are normally occurring inhabitants of the skin, urethra, and urogenital tract. Under immunosuppressed or traumatic conditions these organisms can become pathogenic, as well as septicemic.</p><p class="provider">CDC/ Dr. Gilda L. Jones</p></div>'

microbes[2]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/12163.jpg" alt="Corynebacterium diphtheriae" width="350" /></p><p class="name">Corynebacterium diphtheriae</p><p class="caption">This photomicrograph depicts numerous Gram-positive asporogenous, rod-shaped, <em>Corynebacterium diphtheriae</em> bacteria. Diphtheria toxin can cause serious systemic complications including myocarditis and neuropathies, if it is absorbed from the site of infection. Cutaneous and nasal diphtheria are localized infections that are rarely associated with systemic toxicity. The case-fatality rate of respiratory diphtheria is 5%-10%.</p><p class="provider">CDC/ Graham Heid</p></div>'

microbes[3]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/1932.jpg" alt="Clostridium botulinum" width="350" /></p><p class="name">Clostridium botulinum</p><p class="caption">This photomicrograph depicts numerous <em>Clostridium botulinum</em> bacteria in their endospore stage, which had been highlighted after being process using the malachite green staining method. The endospores appear as green spheres, while the bacilli themselves, will stain a purple color.</p><p class="provider">CDC/ Courtesy of Larry Stauffer, Oregon State Public Health Laboratory</p></div>'

microbes[4]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/19050.jpg" alt="Penicillium multicolor" width="350" /></p><p class="name">Penicillium multicolor</p><p class="caption">The blue-green molds of <em>Penicillium</em> are common contaminants of indoor environments. <em>Penicillium</em> infections of clinical importance are very rare, although this mold has been associated with asthma and hypersensitivity pneumonitis, being that the inhalation of airborne spores is the major route of entry.</p><p class="provider">CDC/ Dr. Lucille K. Georg</p></div>'

microbes[5]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/15472.jpg" alt="Microsporum canis" width="350" /></p><p class="name">Microsporum canis</p><p class="caption"><em>Microsporum canis</em>, a zoophilic dermatophyte often found in cats and dogs, is a common cause of tinea corporis and tinea capitis in humans - commonly referred to as ring worm. Other dermatophytes included in the genera are <em>Epidermophyton</em>, and <em>Trichophyton</em>.</p><p class="provider">CDC/ Dr. Lucille K. Georg</p></div>'

microbes[6]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/10123.jpg" alt="Bacillus anthracis" width="350" /></p><p class="name">Bacillus anthracis</p><p class="caption">Under a very high magnification of 31,207X, this digitally-colorized, scanning electron microscopic (SEM) image depicted endospores from the Sterne strain of <em>Bacillus anthracis</em> bacteria. A key characteristic of the Sterne strain of <em>B. anthracis</wm> is the wrinkled surface of the protein coat of these bacterial spores. These endospores can live for many years, which enables these bacteria to survive in a dormant state, under environmentally-stressful circumstances.</p><p class="provider">CDC/ Laura Rose</p></div>'

microbes[7]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/5053.jpg" alt="Plasmodium vivax" width="350" /></p><p class="name">Plasmodium vivax</p><p class="caption">Under a magnification of 1,125X, this thin film blood smear photomicrograph revealed the presence of two ring-form, <em>Plasmodium vivax</em> parasites, each with 2 chromatin dots. A member of the Apicomplexa, <em>P. vivid</em> is the most frequent and widely distributed cause of recurring malaria.</p><p class="provider">CDC/ Dr. Mae Melvin</p></div>'

microbes[8]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/469.jpg" alt="Toxoplasma gondii" width="350" /></p><p class="name">Toxoplasma gondii</p><p class="caption">This photomicrograph of a murine ascitic fluid smear revealed the presence of tachyzoites (formerly referred to as trophozoites) of the parasitic organism, <em>Toxoplasma gondii</em>. One of the most common parasitic diseases in the developed world, toxoplasmosis can lead to serious infections in pregnant or immunocompromised individuals.</p><p class="provider">CDC/ Dr. L.L. Moore, Jr.</p></div>'

microbes[9]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/10815.jpg" alt="Ebola virus" width="350" /></p><p class="name">Ebola virus</p><p class="caption">This colorized transmission electron microscopic (TEM) image revealed some of the ultrastructural morphology displayed by an Ebola virus virion. This virus causes devastating hemorrhagic fevers and belongs to Baltimore Group V — (-)ssRNA genome.</p><p class="provider">CDC/ Frederick A. Murphy</p></div>'

microbes[10]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/5611.jpg" alt=“Vesicular stomatitis virus" width="350" /></p><p class="name">Vesicular stomatitis virus</p><p class="caption">This negative stain, transmission electron microscopic (TEM) image revealed the presence of numerous negative-sense, single-stranded RNA ((-) ssRNA) vesicular stomatitis virus (VSV) particles. Note the bullet-like shape of these virions, which are very similar to other Rhabdoviruses including the rabies virus.</p><p class="provider">CDC/ Dr. Fred. A. Murphy</p></div>'

microbes[11]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/10010.jpg" alt=“Adenovirus" width="350" /></p><p class="name">Adenovirus</p><p class="caption">This digitally-colorized transmission electron microscopic (TEM) image revealed some of the ultrastructural details exhibited by a small cluster of adenovirus virions. These non-enveloped viruses can cause a wide range of illnesses, from mild respiratory infections in young children  to life-threatening multi-organ disease in people with weakened immune systems.</p><p class="provider">CDC/ Dr. G. William Gary, Jr.</p></div>'

microbes[12]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/4384.jpg" alt="Cryptosporidium parvum" width="350" /></p><p class="name">Cryptosporidium parvum</p><p class="caption">This photomicrograph of a stool smear specimen revealed the presence of numerous <em>Cryptosporidium parvum</em> parasitic organisms, as the cause of a patient’s cryptosporidiosis. <em>P. parvum</em> is a problematic contaminant of water supplies, as it is very chlorine-resistant.</p><p class="provider">CDC/ Dr. Peter Drotman</p></div>'

microbes[13]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/20156.jpg" alt="Candida albicans" width="350" /></p><p class="name">Candida albicans</p><p class="caption">Under a magnification of 500X, this photomicrograph of a Gömöri-trichrome stain-processed liver tissue specimen reveals the presence of what is known as an asteroid body, containing a number of pseudohyphae of the fungal organism, <em>Candida albicans</em>, in the case of a male patient with systemic candidiasis.</p><p class="provider">CDC/ Dr. Kaplan</p></div>'

microbes[14]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/15364.jpg" alt="Histoplasma capsulatum" width="350" /></p><p class="name">Histoplasma capsulatum</p><p class="caption">Under a magnification of 800X, this photomicrograph revealed some of the ultrastructural details exhibited by <em>Histoplasma capsulatum</em>. The symptoms of histoplasmosis vary greatly, but the disease primarily affects the lungs. A disseminated form of this disease usually affects patient’s with a compromised immune system, or very young children, or the elderly.</p><p class="provider">CDC/ Dr. Libero Ajello</p></div>'

microbes[15]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/12199.jpg" alt="Coccidioides immitis" width="350" /></p><p class="name">Coccidioides immitis</p><p class="caption">Magnified 500X, this photomicrograph revealed the presence of thin, septate, hyaline or glass-like hyphae, from which numerous, thick-walled <em>Coccidioides immitis</em> arthroconidia have sprouted. The average arthrospore measures 3.0 x 4.5µm, and is barrel-shaped. This fungal pathogen is more common in the southwestern United States.</p><p class="provider">CDC/ Lucille Georg</p></div>'

microbes[16]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/3771.jpg" alt="Cryptococcus neoformans" width="350" /></p><p class="name">Cryptococcus neoformans</p><p class="caption">This photomicrograph depicts <em>Cryptococcus neoformans</em> using a light India ink staining preparation. Life-threatening infections caused by this encapsulated fungal pathogen have been increasing steadily over the past 10 years because of the onset of AIDS, and the expanded use of immunosuppressive drugs.</p><p class="provider">CDC/ Dr. Leanor Haley</p></div>'

microbes[17]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/18134.jpg" alt="Salmonella enteritidis" width="350" /></p><p class="name">Salmonella enteritidis</p><p class="caption">This digitally-colorized scanning electron microscopic (SEM) image, depicts a number of red-colored, <em>Salmonella</em> sp. bacteria, as they were in the process of invading a mustard-colored, ruffled, immune cell. The process of membrane ruffling is mediated by microbial virulence factors, which cause cytoskeleton rearrangement by the host cell.</p><p class="provider">National Institute of Allergy and Infectious Diseases (NIAID)</p></div>'

microbes[18]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/13178.jpg" alt="Borrelia burgdorferi" width="350" /></p><p class="name">Borrelia burgdorferi</p><p class="caption">Under a high magnification, this digitally colorized scanning electron microscopic (SEM) image depicts three Gram-negative, anaerobic, <em>Borrelia burgdorferi</em> bacteria, which had been derived from a pure culture. This pathogenic organism is responsible for causing the illness, Lyme disease, a zoonotic, vector-borne, ailment, transmitted to humans by way of a tick bite.</p><p class="provider">CDC/ Claudia Molins</p></div>'

microbes[19]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/15732.jpg" alt="Chlamydia psittaci" width="350" /></p><p class="name">Chlamydia psittaci</p><p class="caption">This photomicrograph of an unknown sample type, revealed the presence of Gram-negative, <em>Chlamydia psittaci</em> bacteria, which is the cause of the disease psittacosis. This is a zoonotic disease contracted from infected parrots, such as macaws, cockatiels and budgerigars.</p><p class="provider">CDC/ Dorothy Reese</p></div>'

microbes[20]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/8392.jpg" alt="Variola virus" width="350" /></p><p class="name">Variola virus</p><p class="caption">Highly magnified at 310,000X, this negative-stained transmission electron microscopic (TEM) image depicted a smallpox (variola) virus particle, or a single virion. This is the only human pathogen to have been eradicated from the general population.</p><p class="provider">CDC/ James Nakano</p></div>'

microbes[21]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/10068.jpg" alt="Escherichia coli" width="350" /></p><p class="name">Escherichia coli</p><p class="caption">Under a high magnification of 6,836X, this digitally-colorized, scanning electron microscopic (SEM) image depicted a growing cluster of Gram-negative, rod-shaped, <em>Escherichia coli</em> bacteria of the strain O157:H7, which is a pathogenic strain of <em>E. coli</em>.</p><p class="provider">CDC/ National Escherichia, Shigella, Vibrio Reference Unit at CDC</p></div>'

microbes[22]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/18170.jpg" alt="Klebsiella pneumoniae" width="350" /></p><p class="name">Klebsiella pneumoniae</p><p class="caption">This digitally-colorized scanning electron microscopic (SEM) image depicts a blue colored, human white blood cell (WBC) known specifically as a neutrophil, interacting with two pink colored, rod-shaped, multidrug-resistant (MDR) <em>Klebsiella pneumoniae</em> bacteria, which are known to cause severe hospital-acquired, nosocomial infections.</p><p class="provider">National Institute of Allergy and Infectious Diseases (NIAID)</p></div>'

microbes[23]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/2392.jpg" alt="Treponema pallidum" width="350" /></p><p class="name">Treponema pallidum</p><p class="caption">Pictured are two <em>Treponema pallidum</em> bacteria scanned by an electron microscope, magnified 36,000X. <em>T. pallidum</em> is the causative agent of syphilis. It contains one of the smallest prokaryotic genomes consisting of about 1000 kilobase pairs.</p><p class="provider">CDC/ Joyce Ayers</p></div>'

microbes[24]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/138.jpg" alt="Leptospira" width="350" /></p><p class="name">Leptospira interrogans</p><p class="caption">This digitally-colorized, scanning electron microscopic (SEM) image depicts a number of corkscrew-shaped, <em>Leptospira interrogans</em> sp. bacteria atop a 0.1µm polycarbonate filter. </p><p class="provider">Janice Haney Carr</p></div>'

microbes[25]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/15018.jpg" alt="Neisseria gonorrhoeae" width="350" /></p><p class="name">Neisseria gonorrhoeae</p><p class="caption">This Gram-stained photomicrograph reveals the presence of intracellular Gram-negative, <em>Neisseria gonorrhoeae</em> diplococcal bacteria, amongst numerous white blood cells (WBCs) known as polymorphonuclear leukocytes, or PMNs.</p><p class="provider">CDC/ Bill Schwartz</p></div>'

microbes[26]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/19028.jpg" alt="Rickettsia prowazekii" width="350" /></p><p class="name">Rickettsia prowazekii</p><p class="caption">This photomicrograph reveals the presence of <em>Rickettsia prowazekii</em> bacteria in a yolk sac smear specimen, which had been processed using the Macchiavello staining technique. <em>R. prowazekii</em> is responsible for causing the human disease known as epidemic typhus, and is transmitted to humans by way of the bite from the human body louse, <em>Pediculus humanus</em> var. <em>corporis</em></p><p class="provider">CDC/ Cornelius B. Philip, National Institute of Allergy and Infectious Diseases, Rocky Mountain Lab., Hamilton, Montana</p></div>'

microbes[27]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/1059.jpg" alt="Bacillus cereus" width="350" /></p><p class="name">Bacillus cereus</p><p class="caption">Stained using the Leifson flagella stain method, this photomicrograph revealed the presence of four flagellated, <em>Bacillus cereus</em> bacteria. This bacterium is capable of causing food-borne intoxications of grain-based (think fried rice) meals.</p><p class="provider">CDC/ Dr. William A. Clark</p></div>'

microbes[28]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/9996.jpg" alt="Streptococcus pneumoniae" width="350" /></p><p class="name">Streptococcus pneumoniae</p><p class="caption">This digitally-colorized, scanning electron microscopic (SEM) image depicts what were three, round-shaped, Gram-positive, <em>Streptococcus pneumoniae</em> bacteria (lavender), as they were being attacked by an irregularly-shaped white blood cell (WBC) (pink).</p><p class="provider">CDC/ Dr. Richard Facklam</p></div>'

microbes[29]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/18156.jpg" alt=“Influenza virus" width="350" /></p><p class="name">Influenza virus</p><p class="caption">This digitally colorized transmission electron microscopic (TEM) image depicts numbers of H1N1 influenza virus particles. Surface proteins located on the surface of the virus particles are shown in black.</p><p class="provider">National Institute of Allergy and Infectious Diseases (NIAID)</p></div>'

microbes[30]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/18142.jpg" alt="HIV virus" width="350" /></p><p class="name">HIV virus</p><p class="caption">This digitally colorized transmission electron microscopic (TEM) image depicts a single human immunodeficiency virus (HIV), as it was budding from a human immune cell, which the virus had infected, and within which the HIV virus replicates itself.</p><p class="provider">National Institute of Allergy and Infectious Diseases (NIAID)</p></div>'

microbes[31]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/11150.jpg" alt="Legionella pneumophila" width="350" /></p><p class="name">Legionella pneumophila</p><p class="caption">Magnified 8000X, this digitally colorized scanning electron microscopic (SEM) image depicted a large grouping of <em>Legionella pneumophila</em> bacteria. Note the presence of an elongated-rod morphology in some organisms. <em>L. pneumophila</em> frequently elongate when grown in broth, when plate-grown cells age, or when refrigerated, as in this case. Usually, <em>L. pneumophila</em> are stout, fat bacilli.</p><p class="provider">CDC/ Margaret Williams, PhD; Claressa Lucas, PhD;Tatiana Travis, BS</p></div>'

microbes[32]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/15254.jpg" alt="Haemophilus ducreyi" width="350" /></p><p class="name">Haemophilus ducreyi</p><p class="caption">This photomicrograph revealed the presence of numbers of Gram-negative, <em>Haemophilus ducreyi</em> bacteria that were arranged in parallel rows, known as a "railroad track" arrangement. <em>H. ducreyi</em> causes chancroid, a highly contagious sexually transmitted disease that begins with the formation of painful open sores on the genitals.</p><p class="provider">CDC</p></div>'

microbes[33]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/10221.jpg" alt=“Rubella virus" width="350" /></p><p class="name">Rubella virus</p><p class="caption">This transmission electron microscopic (TEM) image revealed the presence of rubella virus virions, as they were in the process of budding from the host cell surface to be freed into the host’s system, thereby, producing an enveloped virus particle, which means that after budding, the spherical virions icosahedral capsid is enclosed in the host cell membrane. Inside each capsid lies the rubella virus, positive-sense single-stranded RNA ((+)ssRNA) genome. The rubella virus is known to be the cause of rubella, otherwise known as German measles.</p><p class="provider">CDC/ Dr. Fred Murphy; Sylvia Whitfield</p></div>'

microbes[34]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/10234.jpg" alt="Epstein-Barr virus" width="350" /></p><p class="name">Epstein-Barr virus</p><p class="caption">This transmission electron microscopic (TEM) image revealed the presence of numerous Epstein-Barr virus (EBV) virions, members of the Herpesviridae virus family. EBV is also known as human herpesvirus-4 (HHV-4). At the core of its proteinaceous capsid, the EBV contains a double-stranded DNA (ds DNA) linear genome. EBV is known to be the cause of infectious mononucleosis.</p><p class="provider">CDC/ Dr. Fred Murphy</p></div>'

microbes[35]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/10234.jpg" alt="Helicobacter sp. flexispira" width="350" /></p><p class="name">Helicobacter sp. flexispira</p><p class="caption">This scanning electron microscopic (SEM) image depicts a grouping of Gram-negative <em>Flexispira rappini</em> bacteria, magnified 13,951x. The name <em>F. rappini</em> is considered provisional, for it was never formally proposed or accepted. Subsequently determined to be closely related to <em>Helicobacter</em> spp., it is referred to as <em>Helicobacter</em> sp. <em>flexispira</em> in the literature.</p><p class="provider">CDC/ Dr. Patricia Fields, Dr. Collette Fitzgerald</p></div>'

microbes[36]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/3044.jpg" alt="Fusobacterium fusiforme" width="350" /></p><p class="name">Fusobacterium fusiforme</p><p class="caption">This micrograph depicts the gram-negative bacterium, <em>Fusobacterium fusiforme</em> cultured in blood agar for 48 hours. <em>F. fusiforme</em>, along with the spirochete <em>Borrelia vincentii</em>, are the organisms responsible for the condition known as ”Vincent’s angina”. Symptoms include gingival ulcerations with an accompanying pharyngeal infection.</p><p class="provider">CDC/Dr. V.R. Dowell, Jr.</p></div>'

microbes[37]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/10043.jpg" alt="Pseudomonas aeruginosa" width="350" /></p><p class="name">Pseudomonas aeruginosa</p><p class="caption">This digitally-colorized scanning electron microscopic (SEM) image of a number of rod-shaped, Gram-negative, <em>Pseudomonas aeruginosa</em> bacteria. Note the numerous, and significantly smaller, spheroid, purple-colored cocci bacteria also in this field of view. <em>P. aeruginosa</em> is an important pathogen of burn infections and in cystic fibrosis pulmonary infections.</p><p class="provider">CDC/ Janice Haney Carr</p></div>'

microbes[38]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/4206.jpg" alt="Cladosporium werneckii" width="350" /></p><p class="name">Cladosporium werneckii</p><p class="caption">This photomicrograph reveals the conidiophores with conidia of the fungus <em>Hortaea werneckii</em>, the causative agent of tinea nigra, also known as <em>Cladosporium werneckii</em>. This specimen was harvested from a slide culture.</p><p class="provider">CDC/Dr. Libero Ajello</p></div>'

microbes[39]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/11892.jpg" alt="Acanthamoeba polyphaga" width="350" /></p><p class="name">Acanthamoeba polyphaga</p><p class="caption">This scanning electron microscopic (SEM) image revealed two <em>Acanthamoeba polyphaga</em> protozoa, as they were interacting through their pseudopodia, projecting from the surfaces of these organisms. These pseudopodia enable the amoebae to move about, and grasp objects in their environment, and in this case, to communicate with one another.</p><p class="provider">CDC/ Catherine Armbruster; Margaret Williams</p></div>'

microbes[40]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/605.jpg" alt="Entamoeba coli" width="350" /></p><p class="name">Entamoeba coli</p><p class="caption">Under a magnification of 1125X, this photomicrograph of a trichrome stained specimen, revealed some of the ultrastructural details exhibited by a parasitic, <em>Entamoeba coli</em> trophozoite. This is a non-pathogenic species of <em>Entamoeba</em> that frequently exists as a commensal parasite in the human gastrointestinal tract.</p><p class="provider">CDC</p></div>'

microbes[41]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/542.jpg" alt="Balantidium coli" width="350" /></p><p class="name">Balantidium coli</p><p class="caption">This photomicrograph of a stool sample, reveals some of the ultrastructural details displayed by a parasitic, <em>Balantidium coli</em> cyst. Note the darkly stained, bean shaped macronucleus. This  is the only member of the ciliate phylum known to be pathogenic to humans.</p><p class="provider">CDC</p></div>'

microbes[42]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/5237-alt.jpg" alt="Trichomonas vaginalis" width="350" /></p><p class="name">Trichomonas vaginalis</p><p class="caption">This Giemsa-stained micrograph depicts <em>Trichomonas vaginalis</em> protozoa from a laboratory culture. <em>T. vaginalis</em>, a flagellate, is the most common pathogenic protozoan of humans in industrialized countries. This protozoan resides in the female lower genital tract and the male urethra and prostate, where it replicates by binary fission.</p><p class="provider">CDC</p></div>'

microbes[43]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/14822.jpg" alt="Trypanosoma brucei" width="350" /></p><p class="name">Trypanosoma brucei</p><p class="caption">Magnified 1000X, this Giemsa-stained light photomicrograph revealed the presence of <em>Trypanosoma brucei</em> parasites, which were found in a thin film blood smear. Humans are the main reservoir for <em>Trypanosoma brucei gambiense</em>, but this species can also be found in animals. Wild game animals are the main reservoir of <em>T. b. rhodesiense</em>.</p><p class="provider">CDC/ Dr. Mae Melvin</p></div>'

microbes[44]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/18139.jpg" alt="Mycobacterium tuberculosis" width="350" /></p><p class="name">Mycobacterium tuberculosis</p><p class="caption">This digitally colorized scanning electron microscopic (SEM) image depicts a grouping of red colored, rod shaped, <em>Mycobacterium tuberculosis</em> bacteria, which cause tuberculosis (TB) in human beings.</p><p class="provider">National Institute of Allergy and Infectious Diseases (NIAID)</p></div>'

microbes[45]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/4201.jpg" alt="Propionibacterium propionicus" width="350" /></p><p class="name">Propionibacterium propionicus</p><p class="caption">This is the histopathologic appearance of an actinomycetic mycetomatous granule using a Brown & Brenn stain. In this case, <em>Arachnia propionica</em>, which has now been renamed as <em>Propionibacterium propionicus</em>, a Gram-positive rod-shaped bacteria, was the etiologic agent.</p><p class="provider">CDC/ Dr. Libero Ajello</p></div>'

microbes[46]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/254.jpg" alt="Bordetella bronchiseptica" width="350" /></p><p class="name">Bordetella bronchiseptica</p><p class="caption">This scanning electron microscopic (SEM) image depicted a number of Gram-negative, <em>Bordetella bronchiseptica</em> coccobacilli bacteria. This organism is commonly found to be the cause of acute tracheobronchitis in dogs, and only rarely causes infection in human beings, with a compromised immune system, including those who are infected by the human immunodeficiency virus (HIV).</p><p class="provider">CDC/ Janice Haney Carr</p></div>'

microbes[47]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/18115.jpg" alt="Coronavirus" width="350" /></p><p class="name">Coronavirus</p><p class="caption">This highly magnified, digitally colorized transmission electron microscopic (TEM) image reveals ultrastructural details exhibited by a single, spherical-shaped, Middle East respiratory syndrome coronavirus (MERS-CoV) virion.</p><p class="provider">National Institute of Allergy and Infectious Diseases (NIAID)</p></div>'

microbes[48]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/zika.jpg" alt="Zika virus" width="350" /></p><p class="name">Zika virus</p><p class="caption">Zika virus particles (red) shown in African green monkey kidney. Zika virus is related to the dengue, yellow fever, Japanese encephalitis, and West Nile viruses.</p><p class="provider">National Institute of Allergy and Infectious Diseases (NIAID)</p></div>'

microbes[49]='<div class="feature"><p class="splash">Featured Microbe</p><p class="pix"><img src="images/microbes/13367.jpg" alt="Aspergillus" width="350" /></p><p class="name">Aspergillus </p><p class="caption">This scanning electron microscopic (SEM) image depicts a close up of an asexual, <em>Aspergillus</em> sp. fungal fruiting body. This reproductive structure is composed of a septate filament known as a conidiophore, which is topped by chains of conidiospores.</p><p class="provider">CDC/ Robert Simmons</p></div>'


var whichmicrobe=Math.floor(Math.random()*(microbes.length))
document.write(microbes[whichmicrobe])
